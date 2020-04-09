from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core.validators import MinLengthValidator, MaxLengthValidator

class User(AbstractUser):

    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    date_of_birth = models.IntegerField()
    email = models.CharField(max_length=100)
    address_first_line = models.CharField(max_length=100)
    address_second_line = models.CharField(max_length=100)
    address_town = models.CharField(max_length=100)
    address_postcode = models.CharField(max_length=100)
    address_country = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=100)

    def __str__(self):
        return f'{self.first_name} {self.last_name}'