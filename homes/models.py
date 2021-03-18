from django.db import models
from sites.models import Site

class Home(models.Model):
    plot = models.CharField(max_length=50)
    home_type = models.CharField(max_length=50)
    year = models.SmallIntegerField(blank=True, null=True)
    bedrooms = models.SmallIntegerField()
    veranda = models.CharField(max_length=50)
    pull_out_bed = models.SmallIntegerField()
    tv = models.SmallIntegerField()
    site = models.ForeignKey(Site, related_name='homes', null=True, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.plot} - {self.home_type} - {self.site.name}'