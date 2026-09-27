def write_settings(user, prompt_data):
    """Writes the groups a prompt filled in (`attributes.settings.<group>.*`)
    into the user's settings and leaves every other group alone. The user write
    stage can't: authentik nests dotted field keys, and the stage then replaces
    `settings` as a whole, dropping meta, consent and attestations alike."""
    from authentik.core.models import User

    user = User.objects.get(pk=user.pk)
    settings = user.attributes.setdefault("settings", {})
    for group, values in prompt_data.get("attributes", {}).get("settings", {}).items():
        settings.setdefault(group, {}).update(values)
    user.save(update_fields=["attributes"])
