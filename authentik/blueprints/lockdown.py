def lockdown(user, reason, http_request=None):
    from django.db import transaction

    from authentik.core.models import Session, Token, User
    from authentik.core.signals import deactivation_inhibit_cleanup
    from authentik.events.models import Event, EventAction
    from authentik.providers.oauth2.models import (
        AccessToken,
        AuthorizationCode,
        DeviceToken,
        RefreshToken,
    )

    with transaction.atomic(), deactivation_inhibit_cleanup(sessions=True, tokens=False):
        user = User.objects.select_for_update().get(pk=user.pk)
        user.is_active = False
        user.set_unusable_password()
        user.save()

    with transaction.atomic():
        sessions = Session.objects.filter(authenticatedsession__user=user)
        if http_request is not None:
            sessions = sessions.exclude(session_key=http_request.session.session_key)
        sessions.delete()
        Token.objects.filter(user=user).delete()
        for model in (AccessToken, RefreshToken, AuthorizationCode, DeviceToken):
            model.objects.filter(user=user).delete()

    event = Event.new(
        EventAction.USER_WRITE,
        app="authentik.core",
        message="Account lockdown (govex)",
        reason=reason,
        affected_user=user.username,
    )
    if http_request is not None:
        event = event.from_http(http_request, user=user)
    else:
        event.save()
    return user
