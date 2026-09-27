def store_wintersehn_attestation(token):
    """Stores a consent status wintersehn signed (ES256) on the govex account
    it names. Returns an error message, or None when it was stored."""
    import base64
    import json

    from authentik.core.models import User
    from cryptography.exceptions import InvalidSignature
    from cryptography.hazmat.primitives import hashes, serialization
    from cryptography.hazmat.primitives.asymmetric import ec
    from cryptography.hazmat.primitives.asymmetric.utils import encode_dss_signature

    def decode(part):
        return base64.urlsafe_b64decode(part + "=" * (-len(part) % 4))

    def payload_of(stored):
        try:
            return json.loads(decode(stored.split(".")[1]))
        except (AttributeError, IndexError, ValueError):
            return {}

    try:
        header, body, signature = token.split(".")
        payload = json.loads(decode(body))
        raw = decode(signature)
    except ValueError:
        return "Ungültiger Vertragsstatus."
    if len(raw) != 64 or payload.get("iss") != "wintersehn":
        return "Ungültiger Vertragsstatus."

    der = encode_dss_signature(int.from_bytes(raw[:32], "big"), int.from_bytes(raw[32:], "big"))
    message = f"{header}.{body}".encode()
    marker = "-----END PUBLIC KEY-----"
    verified = False
    for block in WINTERSEHN_KEYS.replace("\\n", "\n").split(marker)[:-1]:
        key = serialization.load_pem_public_key((block.strip() + "\n" + marker).encode())
        try:
            key.verify(der, message, ec.ECDSA(hashes.SHA256()))
            verified = True
            break
        except InvalidSignature:
            continue
    if not verified:
        return "Der Vertragsstatus ist nicht von wintersehn signiert."

    user = User.objects.filter(uuid=payload.get("sub")).first()
    if user is None:
        return "Unbekanntes Konto."
    attestations = user.attributes.setdefault("settings", {}).setdefault("attestations", {})
    if payload_of(attestations.get("wintersehn")).get("iat", 0) >= payload.get("iat", 0):
        return "Ein neuerer Vertragsstatus ist bereits gespeichert."
    attestations["wintersehn"] = token
    user.save(update_fields=["attributes"])
    return None
