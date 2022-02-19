from django.db import models

from accounts.models import Ngo, User

# # Create your models here.
class GroupEvent(models.Model):

    MODE = (
            ('Offline', 'Offline'),
            ('Online', 'Online'),
            ) 
    name = models.CharField(max_length=50)
    event_type = models.CharField(max_length=100)
    date = models.CharField(max_length=10)
    time = models.CharField(max_length=10)
    address = models.CharField(max_length=200)
    description = models.TextField(max_length=300)
    mode = models.CharField(max_length=200, choices=MODE)
    latitude = models.DecimalField(max_digits=9, decimal_places=6, null=True, blank=True)
    longitude = models.DecimalField(max_digits=9, decimal_places=6, null=True, blank=True)
    ngo = models.ForeignKey(Ngo, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

class Register(models.Model):

    event_name = models.ForeignKey(GroupEvent,  on_delete=models.CASCADE)
    user_name = models.ForeignKey(User,  on_delete=models.CASCADE)
    mode_chosen = models.CharField(max_length=10) #off/on

    def __str__(self):
        return self.name