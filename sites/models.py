# pylint: disable=no-member
from django.db import models
from django.contrib.auth import get_user_model
from django.contrib.postgres.fields import ArrayField
User = get_user_model()
from datetime import date

class Site(models.Model):
    name = models.CharField(max_length=50)
    country = models.CharField(max_length=50)
    area = models.CharField(max_length=50, null=True)
    short_description = models.CharField(max_length=1000)
    long_description = models.CharField(max_length=50000)
    main_image = models.CharField(max_length=500, null=True)
    gallery_images = ArrayField(models.CharField(max_length=500, blank=True))
    latitude = models.FloatField()
    longitude = models.FloatField()
    facilities = ArrayField(models.CharField(max_length=100))

    def __str__(self):
        return f'{self.name}'

class Review(models.Model):
    text = models.CharField(max_length=1000)
    site = models.ForeignKey(Site, related_name='reviews', null=True, blank=True, on_delete=models.CASCADE)
    owner = models.ForeignKey(User, related_name='reviews', null=True, on_delete=models.CASCADE)
    date_created = models.DateField(auto_now_add=True)

    def __str__(self):
        return f'Comment {self.id} on {self.site}'

class Attraction(models.Model):
    name = models.CharField(max_length=50)
    image = models.CharField(max_length=500, blank=True)
    description = models.CharField(max_length=1000)
    site = models.ForeignKey(Site, related_name='attractions', null=True, blank=True, on_delete=models.CASCADE)

    def __str__(self):
        return f'Attraction {self.name} near {self.site}'