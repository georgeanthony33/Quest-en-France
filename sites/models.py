from django.db import models
# from sites.models import Site

class Site(models.Model):
    name = models.CharField(max_length=50)
    country = models.CharField(max_length=50)
    short_description = models.CharField()
    long_description = models.CharField()
    homes = 
    images = 
    latitude = 
    longitude = 
    getting_there = 
    reviews = 
    attractions = 
    facilities = 

    def __str__(self):
        return f'{self.name}'