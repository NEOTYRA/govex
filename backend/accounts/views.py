import datetime

from altcha import create_challenge, verify_solution
from django.conf import settings
from django.contrib.auth import authenticate, get_user_model, login, logout, update_session_auth_hash
from django.middleware.csrf import get_token
from rest_framework import status
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from .serializers import (
    AccountUpdateSerializer,
    LoginSerializer,
    PasswordChangeSerializer,
    SignupSerializer,
    UserSerializer,
)
from .throttles import LoginIpRateThrottle, LoginThrottled, LoginUsernameRateThrottle

User = get_user_model()


class AltchaChallengeView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        challenge = create_challenge(
            algorithm="PBKDF2/SHA-256",
            cost=5_000,
            expires_at=datetime.datetime.now(datetime.timezone.utc)
            + datetime.timedelta(minutes=10),
            hmac_secret=settings.ALTCHA_HMAC_SECRET,
        )
        return Response(challenge.to_dict())


class SignupView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        altcha_payload = request.data.get("altcha")
        if not altcha_payload:
            return Response(
                {"detail": "Bitte bestätige, dass du kein Bot bist."},
                status=status.HTTP_400_BAD_REQUEST,
            )
        result = verify_solution(altcha_payload, settings.ALTCHA_HMAC_SECRET)
        if not result.verified:
            return Response(
                {"detail": "Bot-Verifizierung fehlgeschlagen. Bitte lade die Seite neu."},
                status=status.HTTP_400_BAD_REQUEST,
            )

        serializer = SignupSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        login(request, user)
        get_token(request)
        return Response(UserSerializer(user).data, status=status.HTTP_201_CREATED)


class LoginView(APIView):
    permission_classes = [AllowAny]
    throttle_classes = [LoginIpRateThrottle, LoginUsernameRateThrottle]

    def throttled(self, request, wait):
        raise LoginThrottled(wait)

    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = authenticate(
            request,
            username=serializer.validated_data["username"],
            password=serializer.validated_data["password"],
        )
        if user is None:
            return Response(
                {"detail": "Benutzername oder Passwort ist falsch."},
                status=status.HTTP_400_BAD_REQUEST,
            )
        login(request, user)
        get_token(request)
        return Response(UserSerializer(user).data)


class LogoutView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        logout(request)
        return Response(status=status.HTTP_204_NO_CONTENT)


class MeView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        get_token(request)
        if request.user.is_authenticated:
            return Response({"user": UserSerializer(request.user).data})
        return Response({"user": None})

    def patch(self, request):
        if not request.user.is_authenticated:
            return Response(status=status.HTTP_401_UNAUTHORIZED)
        serializer = AccountUpdateSerializer(request.user, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response(UserSerializer(user).data)


class PasswordChangeView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        serializer = PasswordChangeSerializer(request.user, data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        update_session_auth_hash(request, user)
        return Response(status=status.HTTP_204_NO_CONTENT)
