# pylint: disable=no-member
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Site
from .serializers import SiteSerializer

class ListView(APIView):

    def get(self, _request):
        sites = Site.objects.all()
        serializer = SiteSerializer(sites, many=True)

        return Response(serializer.data)


class DetailView(APIView):

    def get(self, _request, pk):
        site = Site.objects.get(pk=pk)
        serializer = SiteSerializer(site)

        return Response(serializer.data)