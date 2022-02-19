from rest_framework import serializers
from .models import *

class ProductSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.email')

    class meta:
        model = Product
        fields = ['name', 'price', 'description', 'image', 'owner']