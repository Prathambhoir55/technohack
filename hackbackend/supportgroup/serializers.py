from rest_framework import serializers
from .models import *

class GroupEventSerializer(serializers.ModelSerializer):

    class Meta:
        model = GroupEvent
        fields = '__all__'
        # ['name','event_type', 'date','time', 'address', 'description', 'mode', 'latitude', 'longitude', 'ngo']

class SRegisterSerializer(serializers.ModelSerializer):

    class Meta:
        model = SRegister
        fields = ['event_name','user_name', 'mode_chosen']