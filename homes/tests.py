# pylint: disable=no-member
from django.urls import reverse
from rest_framework.test import APITestCase
from .models import Home
from sites.models import Site

class HomesTests(APITestCase):

    def setUp(self):
        site = Site.objects.create(
            name='Test',
            country='Test',
            short_description='test',
            long_description='test',
            images=['test'],
            latitude=-1,
            longitude=1,
            facilities=['test']
        )
        home = Home.objects.create(
            plot='35',
            home_type='2012 CORDELIA 8.52M X 4M',
            bedrooms=3,
            image='',
            veranda='Semi-covered',
            fridge='Fridge / Freezer',
            gas_tails='',
            tow_bars='',
            pull_out_bed='',
            tv='',
            site=site
        )

    def test_homes_index(self):
        """
        Should return an array of homes
        """

        url = reverse('homes-list')
        response = self.client.get(url)

        self.assertEqual(response.status_code, 200)
        self.assertJSONEqual(response.content, [{
            'id': 1,
            'plot': '35',
            'home_type': '2012 CORDELIA 8.52M X 4M',
            'bedrooms': 3,
            'image': '',
            'veranda': 'Semi-covered',
            'fridge': 'Fridge / Freezer',
            'gas_tails': '',
            'tow_bars': '',
            'pull_out_bed': '',
            'tv': '',
            'site': {
                'id': 1,
                'name': 'Test',
                'country': 'Test',
                'short_description': 'test',
                'long_description': 'test',
                'images': ['test'],
                'latitude': -1,
                'longitude': 1,
                'facilities': ['test']
            }
        }])