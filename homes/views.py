# pylint: disable=no-member
from rest_framework.views import APIView # get the APIView class from DRF
from rest_framework.response import Response # get the Response class from DRF

from .models import Home
from .serializers import HomeSerializer, PopulatedHomeSerializer

class ListView(APIView): # extend the APIView

    def get(self, _request):
        homes = Home.objects.all()
        serializer = PopulatedHomeSerializer(homes, many=True)

        return Response(serializer.data) # send the JSON to the client


class DetailView(APIView): # extend the APIView

    def get(self, _request, pk):
        home = Home.objects.get(pk=pk)
        serializer = PopulatedHomeSerializer(home)

        return Response(serializer.data) # send the JSON to the client