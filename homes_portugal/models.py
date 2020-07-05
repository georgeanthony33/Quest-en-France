from django.db import models

class HomesPortugal(models.Model):
    image_location = models.CharField(max_length=100)
    home_type = models.CharField(max_length=100, blank=True)
    room = models.CharField(max_length=100, blank=True)

    def __str__(self):
        return f'{self.home_type} - {self.room}'