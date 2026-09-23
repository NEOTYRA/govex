import json
import os
import urllib.error
import urllib.parse
import urllib.request

from django.contrib.auth import get_user_model
from django.core.management.base import BaseCommand, CommandError

User = get_user_model()

SYSTEM_USERNAMES = {"govex-system"}


class AuthentikClient:
    def __init__(self, base_url, token):
        self.base_url = base_url.rstrip("/")
        self.token = token

    def request(self, method, path, body=None):
        request = urllib.request.Request(
            f"{self.base_url}/api/v3{path}",
            method=method,
            data=json.dumps(body).encode() if body is not None else None,
            headers={
                "Authorization": f"Bearer {self.token}",
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
        )
        try:
            with urllib.request.urlopen(request, timeout=30) as response:
                payload = response.read()
        except urllib.error.HTTPError as exc:
            raise CommandError(
                f"{method} {path} failed with {exc.code}: {exc.read().decode(errors='replace')}"
            ) from exc
        return json.loads(payload) if payload else None

    def find_users(self, **filters):
        query = urllib.parse.urlencode(filters)
        return self.request("GET", f"/core/users/?{query}")["results"]


class Command(BaseCommand):
    help = (
        "Copies every govex user into authentik: username, email, active flag "
        "and the Django password hash, so nobody has to reset their password. "
        "Each authentik user gets attributes.govex_id = the govex user id, "
        "which the `govex` OIDC scope hands to wintersehn for linking. Safe to "
        "re-run - users that already exist in authentik are left untouched, "
        "so a password changed in authentik is never overwritten."
    )

    def add_arguments(self, parser):
        parser.add_argument("--url", default=os.environ.get("AUTHENTIK_URL"))
        parser.add_argument("--token", default=os.environ.get("GOVEX_MIGRATION_TOKEN"))
        parser.add_argument(
            "--dry-run",
            action="store_true",
            help="Only report what would happen, don't write to authentik.",
        )

    def handle(self, *args, **options):
        if not options["url"] or not options["token"]:
            raise CommandError("AUTHENTIK_URL and GOVEX_MIGRATION_TOKEN must be set.")
        client = AuthentikClient(options["url"], options["token"])
        dry_run = options["dry_run"]

        created = skipped = conflicts = 0
        for user in User.objects.exclude(username__in=SYSTEM_USERNAMES).order_by("pk"):
            existing = client.find_users(attributes=json.dumps({"govex_id": user.pk}))
            if existing:
                skipped += 1
                self.stdout.write(f"= {user.username} (govex {user.pk}) already migrated")
                continue

            if client.find_users(username=user.username):
                conflicts += 1
                self.stdout.write(
                    self.style.ERROR(
                        f"! {user.username} (govex {user.pk}): username already taken in "
                        "authentik by a different account - skipped, resolve manually"
                    )
                )
                continue

            if dry_run:
                created += 1
                self.stdout.write(f"+ {user.username} (govex {user.pk}) would be created")
                continue

            authentik_user = client.request(
                "POST",
                "/core/users/",
                {
                    "username": user.username,
                    "name": user.username,
                    "email": user.email,
                    "is_active": user.is_active,
                    "path": "govex",
                    "type": "internal",
                    "attributes": {"govex_id": user.pk},
                },
            )
            if user.has_usable_password():
                client.request(
                    "POST",
                    f"/core/users/{authentik_user['pk']}/set_password_hash/",
                    {"password": user.password},
                )
            created += 1
            self.stdout.write(
                self.style.SUCCESS(
                    f"+ {user.username} (govex {user.pk}) -> authentik {authentik_user['uuid']}"
                )
            )

        summary = f"{created} created, {skipped} already migrated, {conflicts} conflicts"
        if dry_run:
            summary = f"Dry run: {summary}"
        self.stdout.write(self.style.WARNING(summary) if conflicts else self.style.SUCCESS(summary))
