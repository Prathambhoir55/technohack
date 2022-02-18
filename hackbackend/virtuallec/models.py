from django.db import models
from accounts.models import User, Ngo

# Create your models here.

class Lecture(models.Model):

    #foreign keys
    owner = models.ForeignKey()

    #main fields