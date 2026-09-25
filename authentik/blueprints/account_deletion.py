APPS = [
    ("wintersehn", "GOVEX_WINTERSEHN_CLIENT_ID", "GOVEX_WINTERSEHN_ACCOUNT_DELETED_URL"),
]


def notify_account_deletion(user):
    import hashlib
    import hmac
    import json
    import os
    import time

    from authentik.lib.utils.http import get_http_session
    from authentik.providers.oauth2.models import OAuth2Provider

    payload = {"sub": str(user.uuid), "govex_id": user.attributes.get("govex_id")}
    body = json.dumps(payload, separators=(",", ":"))

    failed = []
    for name, client_id_env, url_env in APPS:
        url = os.environ.get(url_env)
        if not url:
            continue
        provider = OAuth2Provider.objects.filter(client_id=os.environ.get(client_id_env)).first()
        if provider is None:
            failed.append(name)
            continue
        timestamp = str(int(time.time()))
        signature = hmac.new(
            provider.client_secret.encode(),
            f"{timestamp}.{body}".encode(),
            hashlib.sha256,
        ).hexdigest()
        try:
            response = get_http_session().post(
                url,
                data=body,
                headers={
                    "Content-Type": "application/json",
                    "X-Govex-Timestamp": timestamp,
                    "X-Govex-Signature": signature,
                },
                timeout=10,
            )
            response.raise_for_status()
        except Exception:
            failed.append(name)
    return failed
