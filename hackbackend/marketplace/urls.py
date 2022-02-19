from django.urls import path
from . import views
from django.conf.urls import include
from django.conf.urls import url

from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'product', views.ProductsView)


urlpatterns = [
    url('', include(router.urls)),
]