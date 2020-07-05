from rest_framework import serializers
from .models import HomesPortugal

class HomesPortugalSerializer(serializers.ModelSerializer):

    class Meta:
        model = HomesPortugal
        fields = ('__all__')