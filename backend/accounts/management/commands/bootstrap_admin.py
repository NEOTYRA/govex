import os

from django.contrib.auth import get_user_model
from django.core.management.base import BaseCommand
from django.db import transaction

User = get_user_model()

DEFAULT_USERNAME = "admin"
DEFAULT_EMAIL = "admin@govex.ch"
DEFAULT_PASSWORD = "admin"


class Command(BaseCommand):
    help = (
        "Bootstraps the initial govex admin user. Safe to re-run - if the "
        "admin user already exists, only its staff/superuser status is "
        "(re-)ensured, its password is left alone."
    )

    def add_arguments(self, parser):
        parser.add_argument(
            "--username", default=os.environ.get("ADMIN_USERNAME", DEFAULT_USERNAME)
        )
        parser.add_argument("--email", default=os.environ.get("ADMIN_EMAIL", DEFAULT_EMAIL))
        parser.add_argument(
            "--password", default=os.environ.get("ADMIN_PASSWORD", DEFAULT_PASSWORD)
        )

    def handle(self, *args, **options):
        username = options["username"]
        email = options["email"]
        password = options["password"]

        with transaction.atomic():
            user, user_created = User.objects.get_or_create(
                username=username, defaults={"email": email}
            )
            if user_created:
                user.email = email
                user.set_password(password)
                self.stdout.write(
                    self.style.SUCCESS(f"Admin user '{username}' created with the given password.")
                )
            else:
                self.stdout.write(
                    self.style.WARNING(
                        f"User '{username}' already exists - leaving email/password untouched, "
                        "only ensuring superuser rights."
                    )
                )

            user.is_staff = True
            user.is_superuser = True
            user.save()

        self.stdout.write(self.style.SUCCESS(f"'{username}' is now staff/superuser."))
