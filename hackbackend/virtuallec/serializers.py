from rest_framework import serializers
from .models import *

class LecSerializer(serializers.ModelSerializer):

    class Meta:
        model = LecEvent
        fields = '__all__'
        # ['name','event_type', 'date','time', 'address', 'description', 'mode', 'latitude', 'longitude', 'ngo']

class RegisterSerializer(serializers.ModelSerializer):

    class Meta:
        model = Register
        fields = ['event_name','user_name', 'mode_chosen']