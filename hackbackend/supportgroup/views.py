# Create your views here.
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import *
from .serializers import *
from accounts.utils import Util

#displays all events
@api_view(['GET'])
def get_all_events(request):
    event_objs = GroupEvent.objects.all()
    serializer = GroupEventSerializer(event_objs,many=True)
    return Response({'status':200, 'all events': serializer.data})


#creates an event
@api_view(['POST'])
def create_event(request):
    data = request.data
    serializer = GroupEventSerializer(data = request.data)
    print(request.data)
    if not serializer.is_valid():
        return Response({'status':403,'message': "something went wrong"})
    serializer.save()
    return Response({'status':200, 'payload': serializer.data,'message': "Data entered"})    


#all events of an ngo
@api_view(['GET'])
def all_events_ngo(request):
    event_objs = GroupEvent.objects.filter(ngo=request.user)
    serializer = GroupEventSerializer(event_objs,many=True)
    return Response({'status':200, 'all events of an ngo': serializer.data})


#view an event - dynamic url
@api_view(['GET'])
def open_event(request, pk):
    event_objs = GroupEvent.objects.get(id=pk)
    serializer = GroupEventSerializer(event_objs)
    return Response({'status':200, 'opened event': serializer.data})


#on register -- mode  
@api_view(['POST'])
def on_register(request, pk):
    event_name = GroupEvent.objects.get(id=pk)
    user_name = request.user
    request.data.update({'event_name': event_name, 'user_name': user_name})
    data = request.data
    serializer = SRegisterSerializer(data = data)
    if not serializer.is_valid():
        return Response({'status':403,'message': "something went wrong"})
    event_objs = GroupEvent.objects.get(id=pk)
    serializer = GroupEventSerializer(event_objs)
    Util.send_event_mail(serializer.data, request.user)    
    serializer.save()
    return Response({'status':200, 'payload': serializer.data,'message': "Data entered"})    



