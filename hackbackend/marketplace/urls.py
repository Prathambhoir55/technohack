from django.urls import path, re_path
from . import views
from django.conf.urls import include

from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'product', views.ProductsView)


urlpatterns = [
    re_path('', include(router.urls)),
    path('all-products', views.AllProductsView.as_view())
]