"""
Django settings for main project (govex).
"""

from pathlib import Path
import os

from django.core.exceptions import ImproperlyConfigured

BASE_DIR = Path(__file__).resolve().parent.parent


DEBUG = os.getenv("DJANGO_DEBUG", "true").lower() == "true"

SECRET_KEY = os.getenv("DJANGO_SECRET_KEY")
if not SECRET_KEY:
    if not DEBUG:
        raise ImproperlyConfigured(
            "DJANGO_SECRET_KEY must be set in the environment when DJANGO_DEBUG=false."
        )
    SECRET_KEY = "django-insecure-govex-5j$w1nt3rs3hn-shared-dev-key-do-not-use-in-prod"

ALLOWED_HOSTS = []


# Application definition

INSTALLED_APPS = [
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "accounts",
]

ROOT_URLCONF = "main.urls"


DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql",
        "NAME": os.getenv("DB_NAME", "govex"),
        "USER": os.getenv("DB_USER", "govex"),
        "PASSWORD": os.getenv("DB_PASSWORD", "govex"),
        "HOST": os.getenv("DB_HOST", "db"),
        "PORT": os.getenv("DB_PORT", "5432"),
    }
}


# Internationalization

LANGUAGE_CODE = "en-us"
TIME_ZONE = "UTC"
USE_I18N = True
USE_TZ = True

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"
