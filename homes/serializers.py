from rest_framework import serializers
from sites.models import Site
from .models import Home
from bookings.models import Booking

class SiteSerializer(serializers.ModelSerializer):

    class Meta:
        model = Site
        fields = ('name', 'country', 'short_description', 'main_image', 'latitude', 'longitude')

class HomeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Home
        fields = ('__all__')

class BookingSerializer(serializers.ModelSerializer):

    class Meta:
        model = Booking
        fields = ('start_date', 'end_date', 'price', 'currency', 'booking_date', 'user', 'additional_comments')

class PopulatedHomeSerializer(HomeSerializer):

    site = SiteSerializer()
    bookings = BookingSerializer(many=True)