from django.db import models

from accounts.models import User

# Create your models here.

class Product(models.Model):

    name = models.CharField(max_length= 100)
    price = models.IntegerField()
    description = models.TextField(max_length=300)
    image = models.ImageField(upload_to='', null=True)
    owner = models.ForeignKey(User, on_delete= models.CASCADE)
    TYPES = (
            ('Visually Imapired', 'Visually Imapired'),
            ('Physically impaired', 'Physically impaired'),
            ('Hearing impaired', 'Hearing impaired'),
            ('Other', 'Other')
            ) 
    type = models.CharField(max_length=20, choices= TYPES, default = 'Other')


    def __str__(self):
        return self.name
