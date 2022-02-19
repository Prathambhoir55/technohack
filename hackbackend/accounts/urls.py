from django.urls import path

from . import views
from django.conf.urls import include

urlpatterns = [
    path('user-register/', views.UserRegisterAPI.as_view(), name = 'userregistration'),
    path('ngo-register/', views.NgoRegisterAPI.as_view(), name = 'ngoregistration'),
    path('login/', views.LoginAPI.as_view(), name = 'login'),
    path('email-verify/', views.EmailVerify.as_view(), name = 'email-verify'),
    path('', include('marketplace.urls'))
]