from rest_framework import serializers
from django.contrib.auth import get_user_model
from homes.models import Home
from sites.models import Site
from .models import Booking, Person, Ferry
User = get_user_model()

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'first_name', 'last_name', 'email')

class SiteSerializer(serializers.ModelSerializer):

    class Meta:
        model = Site
        fields = ('name', 'country', 'short_description', 'main_image', 'gallery_images', 'latitude', 'longitude')

class HomeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Home
        fields = '__all__'

class PopulatedHomeSerializer(HomeSerializer):
    
    site = SiteSerializer()

class PersonSerializer(serializers.ModelSerializer):

    class Meta:
        model = Person
        fields = '__all__'

class FerrySerializer(serializers.ModelSerializer):

    class Meta:
        model = Ferry
        fields = '__all__'

class BookingSerializer(serializers.ModelSerializer):

    class Meta:
        model = Booking
        fields = '__all__'

class PopulatedBookingSerializer(BookingSerializer):

    home = PopulatedHomeSerializer()
    user = UserSerializer()
    people = PersonSerializer(many=True)
    ferry_quote = FerrySerializer(many=True)

class EditBookingSerializer(serializers.ModelSerializer):

    class Meta:
        model = Booking
        fields = '__all__'