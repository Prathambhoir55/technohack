from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from marketplace.models import Product
from marketplace.serializers import ProductSerializer
from rest_framework import status
from rest_framework import viewsets

# Create your views here.

class ProductsView(viewsets.ModelViewSet):
	queryset = Product.objects.all()
	serializer_class = ProductSerializer
	
	def get_queryset(self):
		return Product.objects.filter(owner = self.request.user)
		
	def perform_create(self,serializer):
	    serializer.save(owner = self.request.user)

class AllProductsView(APIView):

	def get(self,request):
		products = Product.objects.all()
		serializer = ProductSerializer(products, many = True)
		return Response(serializer.data, status= status.HTTP_200_OK)

# class PaymentView(APIView):

# 	def get()