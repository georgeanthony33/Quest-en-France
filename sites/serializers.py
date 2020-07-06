from rest_framework import serializers
from .models import Site, Review, Attraction, LongDescriptionParagraph
from homes.models import Home
from django.contrib.auth import get_user_model
User = get_user_model()

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'first_name', 'last_name')

class LongDescriptionParagraphSerializer(serializers.ModelSerializer):

    class Meta:
        model = LongDescriptionParagraph
        fields = '__all__'

class HomeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Home
        fields = '__all__'

class ReviewSerializer(serializers.ModelSerializer):

    class Meta:
        model = Review
        fields = '__all__'

class PopulatedReviewSerializer(ReviewSerializer):

    owner = UserSerializer()

class AttractionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Attraction
        fields = '__all__'

class SiteSerializer(serializers.ModelSerializer):

    class Meta:
        model = Site
        fields = ('__all__')

class PopulatedSiteSerializer(SiteSerializer):

    homes = HomeSerializer(many=True)
    reviews = PopulatedReviewSerializer(many=True)
    attractions = AttractionSerializer(many=True)
    long_description_paragraphs = LongDescriptionParagraphSerializer(many=True)