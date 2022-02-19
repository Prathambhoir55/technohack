from django.contrib import admin
from django.urls import path, include
from .views import *

urlpatterns = [
 path('get_all_events/',get_all_events),
 path('create_event/', create_event),
 path('all_events_ngo/', all_events_ngo),
 path('<int:pk>/open_event/', open_event),
 path('<int:pk>/on_register/', on_register),
]
