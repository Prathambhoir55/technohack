from rest_framework import serializers
from .models import *

class GroupEventSerializer(serializers.ModelSerializer):

    class Meta:
        model = GroupEvent
        fields = ['name','event_type', 'date_time', 'address', 'description', 'mode', 'ngo']

class RegisterSerializer(serializers.ModelSerializer):

    class Meta:
        model = Register
        fields = ['event_name','user_name', 'mode_chosen']