# pylint: disable=no-member
from rest_framework.views import APIView # get the APIView class from DRF
from rest_framework.response import Response # get the Response class from DRF

from .models import HomesPortugal
from .serializers import HomesPortugalSerializer

class ListView(APIView):

    def get(self, _request):
        homes_portugal = HomesPortugal.objects.all()
        serialized_homes_portugal = HomesPortugalSerializer(homes_portugal, many=True)

        return Response(serialized_homes_portugal.data)