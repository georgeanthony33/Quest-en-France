# pylint: disable=no-member
from rest_framework.views import APIView # get the APIView class from DRF
from rest_framework.response import Response # get the Response class from DRF

from .models import HomeImage
from .serializers import HomeImageSerializer

class ListView(APIView):

    def get(self, _request):
        home_images = HomeImage.objects.all()
        serialized_home_images = HomeImageSerializer(home_images, many=True)

        return Response(serialized_home_images.data)