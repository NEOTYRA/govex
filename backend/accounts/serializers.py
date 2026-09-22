from django.contrib.auth import get_user_model
from django.contrib.auth.password_validation import validate_password
from rest_framework import serializers

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "email"]


class SignupSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, validators=[validate_password])

    class Meta:
        model = User
        fields = ["username", "email", "password"]

    def validate_username(self, value):
        if User.objects.filter(username=value).exists():
            raise serializers.ValidationError(
                "Dieser Benutzername ist bereits vergeben."
            )
        return value

    def validate_email(self, value):
        value = value.strip().lower()
        if not value:
            raise serializers.ValidationError("Email darf nicht leer sein.")
        if User.objects.filter(email__iexact=value).exists():
            raise serializers.ValidationError(
                "Zu dieser Email existiert bereits ein Konto."
            )
        return value

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)


class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(write_only=True)


class AccountUpdateSerializer(serializers.Serializer):
    username = serializers.CharField(required=False)
    email = serializers.EmailField(required=False)

    def validate_username(self, value):
        value = value.strip()
        if not value:
            raise serializers.ValidationError("Benutzername darf nicht leer sein.")
        if User.objects.exclude(pk=self.instance.pk).filter(username=value).exists():
            raise serializers.ValidationError(
                "Dieser Benutzername ist bereits vergeben."
            )
        return value

    def validate_email(self, value):
        value = value.strip().lower()
        if not value:
            raise serializers.ValidationError("Email darf nicht leer sein.")
        if (
            User.objects.exclude(pk=self.instance.pk)
            .filter(email__iexact=value)
            .exists()
        ):
            raise serializers.ValidationError(
                "Zu dieser Email existiert bereits ein Konto."
            )
        return value

    def save(self):
        user = self.instance
        if "username" in self.validated_data:
            user.username = self.validated_data["username"]
        if "email" in self.validated_data:
            user.email = self.validated_data["email"]
        user.save()
        return user


class PasswordChangeSerializer(serializers.Serializer):
    current_password = serializers.CharField(write_only=True)
    new_password = serializers.CharField(write_only=True, validators=[validate_password])

    def validate_current_password(self, value):
        if not self.instance.check_password(value):
            raise serializers.ValidationError("Aktuelles Passwort ist falsch.")
        return value

    def save(self):
        user = self.instance
        user.set_password(self.validated_data["new_password"])
        user.save()
        return user
