"""
Django settings for main project (govex).
"""

from pathlib import Path
import os

from django.core.exceptions import ImproperlyConfigured

BASE_DIR = Path(__file__).resolve().parent.parent


DEBUG = os.getenv("DJANGO_DEBUG", "true").lower() == "true"

# SECURITY WARNING: keep the secret key used in production secret!
# The fallback below is committed to the repo, so it is public - fine for local
# dev, but refuse to start with it once DEBUG is off, instead of silently
# running production with a secret key anyone can read on GitHub.
SECRET_KEY = os.getenv("DJANGO_SECRET_KEY")
if not SECRET_KEY:
    if not DEBUG:
        raise ImproperlyConfigured(
            "DJANGO_SECRET_KEY must be set in the environment when DJANGO_DEBUG=false."
        )
    SECRET_KEY = "django-insecure-govex-5j$w1nt3rs3hn-shared-dev-key-do-not-use-in-prod"

# Signs ALTCHA proof-of-work challenges (signup form). Falls back to
# SECRET_KEY so no extra configuration is required to get started.
ALTCHA_HMAC_SECRET = os.getenv("ALTCHA_HMAC_SECRET", SECRET_KEY)

# Signs OIDC id_tokens for every registered OAuth2 client (e.g. wintersehn).
# Generate with: openssl genrsa -out oidc.key 4096
# The fallback below is a committed, throwaway 2048-bit dev key - fine for
# local dev (its whole purpose is to be public), but refuse to start with it
# once DEBUG is off, same as DJANGO_SECRET_KEY above.
OIDC_RSA_PRIVATE_KEY = os.getenv("OIDC_RSA_PRIVATE_KEY")
if not OIDC_RSA_PRIVATE_KEY:
    if not DEBUG:
        raise ImproperlyConfigured(
            "OIDC_RSA_PRIVATE_KEY must be set in the environment when DJANGO_DEBUG=false."
        )
    OIDC_RSA_PRIVATE_KEY = """-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCs07ehC77vPsDw
MdLy6U0Xdbh+uWMLkUlPR4mrMYDXUS/arIyasJFGxTF5Pln4PF9ZHaNqZi3+hStj
UNfL/VciRTlcf4EqRctpx0s3JWRrmR3f7WEmTbWSAzvQEQGAgpTfONcnQozLS8j3
Y8M7nXmCiiqz3+dosW3+UJA0iwXDAiPEHcMvBYkT1hthonHIxxqcFww6uNI9nxRO
GdGhRBqeXKj3CdzwhenvdjuaKX7qSzhXGcY7S0T2slaiTMsk6vg+/D1579hBiaMn
zURsL5fJyFwNgeLvjy1r1TxUn5Atl4w0UfmuSCzyzi5WSqYP5N9JEU+w9RDSZzy4
npUJ8w3zAgMBAAECggEAL5p7XGETXOuwkhhvLdhkEx+qS0F+DgwdILioK17NycED
iNx5OAyFX3RmXap2dqEOdEntHpv5dD8zBb6ZSgdEblyZ4af/KGkkD8VEqvJiOB7r
Myg716SU7Bx256cffkm5fsi1voseo8qClt3EQ1HrS7EJ9RSptVUV4nRHXCmk0yL5
cga4ObH90Y+Fdb0ewdJX53xZnyBtgbZDa7lRSDRQsjFvExWSJQYM3QISJSEJ9Q8/
fWamOxHK6ssS9MlW2Vg8Pb1KUl/CVW+eECo3nNT0eBDHJQ4n0jGeO5fyYxaJhNI+
iy842EM8Jv0CyHPDkDMmATPxFbz5ZMH7/OAHsE5HeQKBgQDummeMjpY2/J0dP3ac
3lndX8L0RhZ4B4du0gIPD58tTQF3tOEnZnvFYb5a7YuFrE4fBZGC3oKoeiylDWcQ
guz/DWcJPHHS4aI/QC3qH7fRjqtli13Dpwf68WJgRUdcLtyeeYe10KAee8vyHbib
r2h2xp82iFsqamE8PpW49HNYaQKBgQC5bZUx58lm/JPcf34OlEHyTzGNeq99Ywtb
LE+CDJkF34ohP0G+W95WWDKaerkzfeqnq/d3dnO7+43xoL/BeQqYB0rvFMEchf1H
lk0J3BWeb9nm6wKXaT0rhrwJhMp6MGlvithjvUOzh2vyz2mzW9wYk6m4wZz7j+PJ
AAXGN9yH+wKBgAiS7dOkMAuryi2J4UZDyzDkRwomFpqbkqdNzpsh8ZNcKAhYLJsQ
2LPADmoQDSpxhaEhvxfXzRQmx8HqmGCEg+WqYqB3VpPAXect9DhsiVtzZ/9PIcBt
GSFQWTuiYa0TVgQv08uZwpc11Z9OqBqYFAXon0IDZltA1Vun2BN8XUS5AoGAcVJb
P6icGWh7JOJ1s4s/0ko7ym8UGNkS86Fc5em1CzXWQQNbtm6GrtYv9uDRlnp5kgcy
sbued2ABG45WInNK2iZ60Sop6rioVbuxUTlDrRRGYy104/vY+mTZPif9Zjd3+Ecu
f6YHXgyBGF9SBd8533s+2j7ZJZSGbSyqWr2A9UkCgYEAkIW156i6B15T3ENVaP97
m85cHOKhz2p7MD+Clu5tgHwraNQabIFRRP5RhrecewHdoGAxLC6+TeRwSYUr6wSA
+jHURPamoVWeVYe12VCZllkewkf4h/9tuWEq7MuqVzMZ+Yv9NhQ9pGsI5sTZ8Gd7
5e3CWG+/M+1b34fySe92dko=
-----END PRIVATE KEY-----"""

ALLOWED_HOSTS = os.getenv("DJANGO_ALLOWED_HOSTS", "localhost,127.0.0.1,backend").split(
    ","
)

CSRF_TRUSTED_ORIGINS = os.getenv(
    "DJANGO_CSRF_TRUSTED_ORIGINS", "http://localhost:5174,http://127.0.0.1:5174"
).split(",")

# Caddy terminates TLS and talks plain HTTP to this container, marking the
# original scheme in this header so Django knows the outer request was HTTPS.
SECURE_PROXY_SSL_HEADER = ("HTTP_X_FORWARDED_PROTO", "https")
SESSION_COOKIE_SECURE = not DEBUG
# Browsers don't scope cookies by port, so in local dev govex (localhost:5174)
# and client apps like wintersehn (localhost:5173) would otherwise overwrite
# each other's `sessionid` cookie mid-login.
SESSION_COOKIE_NAME = "govex_sessionid"
CSRF_COOKIE_SECURE = not DEBUG
# In production govex answers on two subdomains (auth.* for the OIDC flow,
# account.* for account management). Scoping both cookies to the parent
# domain keeps a single login valid on both.
SESSION_COOKIE_DOMAIN = os.getenv("COOKIE_DOMAIN") or None
CSRF_COOKIE_DOMAIN = SESSION_COOKIE_DOMAIN


# Application definition

INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "rest_framework",
    "oauth2_provider",
    "accounts",
]

REST_FRAMEWORK = {
    "DEFAULT_AUTHENTICATION_CLASSES": [
        "rest_framework.authentication.SessionAuthentication",
    ],
    "DEFAULT_PERMISSION_CLASSES": [
        "rest_framework.permissions.IsAuthenticated",
    ],
    "DEFAULT_THROTTLE_RATES": {
        "login_ip": "10/min",
        "login_username": "20/hour",
    },
}

CACHES = {
    "default": {
        "BACKEND": "django.core.cache.backends.db.DatabaseCache",
        "LOCATION": "django_cache",
    }
}

# govex is an identity provider: it only ever hands out `openid`, `profile`
# and `email` claims (username, email). Client apps (e.g. wintersehn) keep
# all app-specific data (avatars, roles, consent, ...) on their own side,
# linked by the `sub` claim.
OAUTH2_PROVIDER = {
    "OIDC_ENABLED": True,
    "OIDC_RSA_PRIVATE_KEY": OIDC_RSA_PRIVATE_KEY,
    "SCOPES": {
        "openid": "OpenID Connect scope",
        "profile": "Username",
        "email": "Email address",
    },
    "OAUTH2_VALIDATOR_CLASS": "accounts.oidc.GovexOAuth2Validator",
}

AUTHENTICATION_BACKENDS = [
    "django.contrib.auth.backends.ModelBackend",
]

# The DOT authorize view redirects here (with ?next=) when the visitor has
# no govex session yet. The Vue login page reads `next` and, after a
# successful login, does a full-page redirect back to it so the browser
# carries the freshly-set session cookie into the following request to
# /o/authorize/.
LOGIN_URL = os.getenv("FRONTEND_LOGIN_URL", "http://localhost:5174/login")

MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "whitenoise.middleware.WhiteNoiseMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]

ROOT_URLCONF = "main.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [BASE_DIR / "templates"],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

WSGI_APPLICATION = "main.wsgi.application"


# Database

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql",
        "NAME": os.getenv("DB_NAME", "govex"),
        "USER": os.getenv("DB_USER", "govex"),
        "PASSWORD": os.getenv("DB_PASSWORD", "govex"),
        "HOST": os.getenv("DB_HOST", "db"),
        "PORT": os.getenv("DB_PORT", "5432"),
        "CONN_MAX_AGE": 60,
        "CONN_HEALTH_CHECKS": True,
    }
}


# Password validation

AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.MinimumLengthValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.CommonPasswordValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.NumericPasswordValidator",
    },
]


# Internationalization

LANGUAGE_CODE = "en-us"
TIME_ZONE = "UTC"
USE_I18N = True
USE_TZ = True


# Static files

STATIC_URL = "static/"
STATIC_ROOT = BASE_DIR / "staticfiles"

STORAGES = {
    "default": {
        "BACKEND": "django.core.files.storage.FileSystemStorage",
    },
    "staticfiles": {
        "BACKEND": "whitenoise.storage.CompressedManifestStaticFilesStorage",
    },
}

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"
