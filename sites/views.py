# pylint: disable=no-member
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_404_NOT_FOUND, HTTP_201_CREATED, HTTP_422_UNPROCESSABLE_ENTITY, HTTP_204_NO_CONTENT, HTTP_202_ACCEPTED, HTTP_401_UNAUTHORIZED
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from .models import Site, Review
from .serializers import SiteSerializer, PopulatedSiteSerializer, ReviewSerializer

class ListView(APIView):

    def get(self, _request):
        sites = Site.objects.all()
        serializer = PopulatedSiteSerializer(sites, many=True)

        return Response(serializer.data)

class DetailView(APIView):

    def get(self, _request, pk):
        site = Site.objects.get(pk=pk)
        serializer = PopulatedSiteSerializer(site)

        return Response(serializer.data)


class AllReviews(APIView):

    def get(self, _request):
        reviews = Review.objects.all()
        serialized_reviews = ReviewSerializer(reviews, many=True)

        return Response(serialized_reviews.data)

class ReviewListView(APIView):

    permission_classes = (IsAuthenticatedOrReadOnly, )

    def post(self, request, pk):
        request.data['site'] = pk
        request.data['owner'] = request.user.id

        review = ReviewSerializer(data=request.data)

        if review.is_valid():
            review.save()
            site = Site.objects.get(pk=pk)
            serialized_site = PopulatedSiteSerializer(site)

            return Response(serialized_site.data, status=HTTP_201_CREATED)

        return Response(review.errors, status=HTTP_422_UNPROCESSABLE_ENTITY)

class ReviewDetailView(APIView):

    permission_classes = (IsAuthenticatedOrReadOnly, )

    def put(self, request, **kwargs):
        try:
            review = Review.objects.get(pk=kwargs['review_pk'])
            if review.owner.id != request.user.id:
                return Response(status=HTTP_401_UNAUTHORIZED)
            updated_review = ReviewSerializer(review, data=request.data)
            if updated_review.is_valid():
                updated_review.save()
                return Response(updated_review.data)
            return Response(updated_review.errors, status=HTTP_422_UNPROCESSABLE_ENTITY)
        except Review.DoesNotExist:
            return Response({'message': 'Not Found'}, status=HTTP_404_NOT_FOUND)

    def delete(self, request, **kwargs):
        try:
            review = Review.objects.get(pk=kwargs['review_pk'])
            if review.owner.id != request.user.id:
                return Response(status=HTTP_401_UNAUTHORIZED)
            review.delete()
            return Response(status=HTTP_204_NO_CONTENT)
        except Review.DoesNotExist:
            return Response({'message': 'Not Found'}, status=HTTP_404_NOT_FOUND)