from oauth2_provider.oauth2_validators import OAuth2Validator


class GovexOAuth2Validator(OAuth2Validator):
    """Adds the `preferred_username` claim to id_tokens/userinfo responses.

    govex only ever knows username/email/password, so this is the full
    claim set any client app gets back - no avatars, roles or other
    app-specific data leaks through here.
    """

    def get_additional_claims(self, request):
        return {
            "preferred_username": request.user.username,
            "email": request.user.email,
        }
