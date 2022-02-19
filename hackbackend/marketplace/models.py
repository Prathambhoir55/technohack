from django.db import models

from accounts.models import User

# Create your models here.

class Product:

    name = models.CharField(max_length= 100)
    price = models.IntegerField()
    description = models.TextField(max_length=300)
    image = models.ImageField(upload_to='images/', null=True)
    owner = models.ForeignKey(User, on_delete= models.CASCADE)
    #type = models.CharField(max_length=20, choices=)


    def __str__(self):
        return self.name
