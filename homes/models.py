from django.db import models
from sites.models import Site

class Home(models.Model):
    plot = models.SmallIntegerField()
    home_type = models.CharField(max_length=50)
    bedrooms = models.SmallIntegerField()
    image = models.CharField(max_length=200, blank=True)
    veranda = models.CharField(max_length=50)
    fridge = models.CharField(max_length=50)
    gas_tails = models.CharField(max_length=50, blank=True)
    tow_bars = models.CharField(max_length=50)
    pull_out_bed = models.CharField(max_length=50, blank=True)
    tv = models.CharField(max_length=50, blank=True)
    site = models.ForeignKey(Site, related_name='homes', null=True, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.plot} - {self.home_type}'