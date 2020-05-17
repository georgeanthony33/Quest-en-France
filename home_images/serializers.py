from rest_framework import serializers
from .models import HomeImage

class HomeImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = HomeImage
        fields = ('__all__')