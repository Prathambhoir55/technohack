from rest_framework import serializers
from .models import *

class ProductSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.email')

    class Meta:
        model = Product
        fields = ['id','name', 'price', 'description', 'image', 'owner']