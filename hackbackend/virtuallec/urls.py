from django.contrib import admin
from django.urls import path, include
from .views import *

urlpatterns = [
 path('lec/get_all_events/',get_all_events),
 path('lec/create_event/', create_event),
 path('lec/all_events_ngo/', all_events_ngo),
 path('lec/<int:pk>/open_event/', open_event),
 path('lec/<int:pk>/on_register/', on_register),
]
