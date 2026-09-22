from django.urls import path

from . import views

urlpatterns = [
    path(
        "altcha-challenge/", views.AltchaChallengeView.as_view(), name="altcha-challenge"
    ),
    path("signup/", views.SignupView.as_view(), name="signup"),
    path("login/", views.LoginView.as_view(), name="login"),
    path("logout/", views.LogoutView.as_view(), name="logout"),
    path("me/", views.MeView.as_view(), name="me"),
    path("password/", views.PasswordChangeView.as_view(), name="password-change"),
]
