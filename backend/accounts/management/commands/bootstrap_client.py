import os

from django.contrib.auth import get_user_model
from django.core.management.base import BaseCommand
from oauth2_provider.models import get_application_model

Application = get_application_model()
User = get_user_model()


class Command(BaseCommand):
    help = (
        "Registers (or updates) a trusted first-party OAuth2/OIDC client "
        "application, e.g. wintersehn, from environment variables. Safe to "
        "re-run - the client_secret is only set once, on creation; every "
        "other field is kept in sync on each run."
    )

    def add_arguments(self, parser):
        parser.add_argument("--name", default=os.environ.get("CLIENT_NAME"))
        parser.add_argument("--client-id", default=os.environ.get("CLIENT_ID"))
        parser.add_argument("--client-secret", default=os.environ.get("CLIENT_SECRET"))
        parser.add_argument("--redirect-uri", default=os.environ.get("CLIENT_REDIRECT_URI"))

    def handle(self, *args, **options):
        name = options["name"]
        client_id = options["client_id"]
        client_secret = options["client_secret"]
        redirect_uri = options["redirect_uri"]

        missing = [
            flag
            for flag, value in [
                ("--name/CLIENT_NAME", name),
                ("--client-id/CLIENT_ID", client_id),
                ("--client-secret/CLIENT_SECRET", client_secret),
                ("--redirect-uri/CLIENT_REDIRECT_URI", redirect_uri),
            ]
            if not value
        ]
        if missing:
            self.stdout.write(
                self.style.WARNING(
                    f"Skipping client registration - missing: {', '.join(missing)}"
                )
            )
            return

        owner, _ = User.objects.get_or_create(
            username="govex-system", defaults={"is_active": False}
        )

        application, created = Application.objects.get_or_create(
            client_id=client_id,
            defaults={
                "user": owner,
                "name": name,
                "client_secret": client_secret,
                "client_type": Application.CLIENT_CONFIDENTIAL,
                "authorization_grant_type": Application.GRANT_AUTHORIZATION_CODE,
                "algorithm": Application.RS256_ALGORITHM,
                "redirect_uris": redirect_uri,
                "skip_authorization": True,
            },
        )

        if created:
            self.stdout.write(
                self.style.SUCCESS(
                    f"Client '{name}' ({client_id}) registered with the given secret."
                )
            )
        else:
            application.name = name
            application.redirect_uris = redirect_uri
            application.client_type = Application.CLIENT_CONFIDENTIAL
            application.authorization_grant_type = Application.GRANT_AUTHORIZATION_CODE
            application.algorithm = Application.RS256_ALGORITHM
            application.skip_authorization = True
            application.save()
            self.stdout.write(
                self.style.WARNING(
                    f"Client '{name}' ({client_id}) already existed - left its secret "
                    "untouched, refreshed every other field."
                )
            )
