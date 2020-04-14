from rest_framework import serializers
from django.contrib.auth import get_user_model
import django.contrib.auth.password_validation as validations
from django.contrib.auth.hashers import make_password
from django.core.exceptions import ValidationError
from homes.models import Home
from sites.models import Site, Review
from bookings.models import Booking, Person, Ferry

User = get_user_model()


class SiteSerializer(serializers.ModelSerializer):

    class Meta:
        model = Site
        fields = ('name', 'country', 'short_description', 'images', 'latitude', 'longitude')

class ReviewSerializer(serializers.ModelSerializer):

    class Meta:
        model = Review
        fields = ('text', 'site')

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
    people = PersonSerializer(many=True)
    ferry_quote = FerrySerializer(many=True)


class UserSerializer(serializers.ModelSerializer):

    password = serializers.CharField(write_only=True)
    password_confirmation = serializers.CharField(write_only=True)

    def validate(self, data):

        password = data.pop('password')
        password_confirmation = data.pop('password_confirmation')

        if password != password_confirmation:
            raise serializers.ValidationError({'password_confirmation': 'Passwords do not match'})

        # try:
        #     validations.validate_password(password=password)
        # except ValidationError as err:
        #     raise serializers.ValidationError({'password': err.messages})

        data['password'] = make_password(password)
        return data

    class Meta:
        model = User
        fields = ('__all__')

class PopulatedUserSerializer(UserSerializer):

    bookings = PopulatedBookingSerializer(many=True)
    reviews = ReviewSerializer(many=True)