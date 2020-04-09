from django.db import models
from homes.models import Home
from django.contrib.auth import get_user_model
User = get_user_model()

class Booking(models.Model):
    home = models.ForeignKey(Home, related_name='bookings', null=True, on_delete=models.SET_NULL)
    start_date = models.IntegerField()
    end_date = models.IntegerField()
    price = models.SmallIntegerField()
    currency = models.CharField(max_length=3)
    booking_date = models.IntegerField()
    user = models.ForeignKey(User, related_name='bookings', null=True, on_delete=models.CASCADE)
    additional_comments = models.CharField(max_length=10000)

    def __str__(self):
        return f'{self.user.first_name} {self.user.last_name} - {self.start_date} to {self.end_date}'

class Person(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    date_of_birth = models.IntegerField()
    booking = models.ForeignKey(Booking, related_name='people', null=True, on_delete=models.CASCADE)

    # def __str__(self):
    #     return f'{self.first_name} - {self.last_name}'

class Ferry(models.Model):
    outbound_route = models.CharField(max_length=100)
    outbound_date = models.IntegerField()
    inbound_route = models.CharField(max_length=100)
    inbound_date = models.IntegerField()
    number_of_adults = models.SmallIntegerField()
    number_of_children = models.SmallIntegerField()
    number_of_infants = models.SmallIntegerField()
    vehicle_make = models.CharField(max_length=100)
    vehicle_model = models.CharField(max_length=100)
    vehicle_height = models.CharField(max_length=100)
    roof_box = models.CharField(max_length=3)
    bike_rack_on_top = models.CharField(max_length=3)
    bike_rack_on_rear = models.CharField(max_length=3)
    trailor = models.CharField(max_length=3)
    trailer_length = models.CharField(max_length=100, blank=True)
    additional_comments = models.CharField(max_length=10000, blank=True)
    booking = models.ForeignKey(Booking, related_name='ferry_quote', null=True, on_delete=models.CASCADE)
    
    # def __str__(self):
    #     return f'{self.booking.user.first_name} {self.booking.user.last_name} - {self.outbound_date} to {self.inbound_date}'