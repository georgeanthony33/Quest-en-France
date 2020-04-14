from rest_framework import serializers
from sites.models import Site
from .models import Home

class SiteSerializer(serializers.ModelSerializer):

    class Meta:
        model = Site
        fields = ('name', 'country', 'short_description', 'images', 'latitude', 'longitude')

class HomeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Home
        fields = ('__all__')

class PopulatedHomeSerializer(HomeSerializer):

    site = SiteSerializer()