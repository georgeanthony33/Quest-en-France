# pylint: disable=no-member
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_404_NOT_FOUND, HTTP_201_CREATED, HTTP_422_UNPROCESSABLE_ENTITY, HTTP_204_NO_CONTENT, HTTP_202_ACCEPTED, HTTP_401_UNAUTHORIZED
from rest_framework.permissions import IsAuthenticated
from .models import Booking, Person, Ferry
from homes.models import Home
from .serializers import BookingSerializer, PopulatedBookingSerializer, PersonSerializer, FerrySerializer
import datetime

class BookingListView(APIView):

    permission_classes = (IsAuthenticated, )

    def get(self, _request):

        bookings = Booking.objects.all()
        serialized_bookings = PopulatedBookingSerializer(bookings, many=True)

        return Response(serialized_bookings.data)

    def post(self, request):

        request.data['user'] = request.user.id
        booking = BookingSerializer(data=request.data)

        if booking.is_valid():

            start_date = booking.validated_data.get('start_date')
            end_date = booking.validated_data.get('end_date')
            home = booking.validated_data.get('home')

            if start_date.strftime("%a") == 'Tue' or start_date.strftime("%a") == 'Thu' or end_date.strftime("%a") == 'Tue' or end_date.strftime("%a") == 'Thu':
                return Response({'message': 'no arrivals or departures on Tuesdays and Thursdays'}, status=HTTP_422_UNPROCESSABLE_ENTITY)
            
            if (end_date - start_date).days < 6:
                return Response({'message': 'minimum of 6 nights stay'}, status=HTTP_422_UNPROCESSABLE_ENTITY)

            is_occupied = Home.objects.filter(
                bookings__end_date__gt=start_date,
                bookings__start_date__lt=end_date,
                id=home.id).exists()

            # filter_params = dict(end_date__lte=start_date, start_date__gte=end_date)
            # is_occupied = Booking.objects.filter(**filter_params, home=home).exists()

            if is_occupied:
                return Response({'message': 'home already booked for these dates'}, status=HTTP_422_UNPROCESSABLE_ENTITY)

            booking.save()

            return Response(booking.data, status=HTTP_201_CREATED)

        return Response(booking.errors, status=HTTP_422_UNPROCESSABLE_ENTITY)

class BookingDetailView(APIView):

    permission_classes = (IsAuthenticated, )

    def get(self, _request, pk):

        try:
            booking = Booking.objects.get(pk=pk)
            serialized_booking = PopulatedBookingSerializer(booking)
            return Response(serialized_booking.data)
        except Booking.DoesNotExist:
            return  Response({'message': 'Not Found'}, status=HTTP_404_NOT_FOUND)

    def put(self, request, pk):

        try:
            booking = Booking.objects.get(pk=pk)
            updated_booking = BookingSerializer(booking, data=request.data)
            if updated_booking.is_valid():
                updated_booking.save()
                return Response(updated_booking.data, status=HTTP_202_ACCEPTED)
            return Response(updated_booking.errors, status=HTTP_422_UNPROCESSABLE_ENTITY)
        except Booking.DoesNotExist:
            return  Response({'message': 'Not Found'}, status=HTTP_404_NOT_FOUND)

    def delete(self, _request, pk):

        try:
            booking = Booking.objects.get(pk=pk)
            booking.delete()
            return Response(status=HTTP_204_NO_CONTENT)
        except Booking.DoesNotExist:
            return  Response({'message': 'Not Found'}, status=HTTP_404_NOT_FOUND)

class PersonListView(APIView):

    permission_classes = (IsAuthenticated, )

    def post(self, request, pk):
        request.data['booking'] = pk

        person = PersonSerializer(data=request.data)

        if person.is_valid():
            booking = Booking.objects.get(pk=pk)
            serialized_booking = PopulatedBookingSerializer(booking)
            if len(serialized_booking.data.get('people')) == 6:
                return Response({'message': 'maximum of six people per booking'}, status=HTTP_422_UNPROCESSABLE_ENTITY)
            person.save()
            updated_booking = Booking.objects.get(pk=pk)
            serialized_updated_booking = PopulatedBookingSerializer(updated_booking)

            return Response(serialized_updated_booking.data, status=HTTP_201_CREATED)

        return Response(person.errors, status=HTTP_422_UNPROCESSABLE_ENTITY)

class PersonDetailView(APIView):

    permission_classes = (IsAuthenticated, )

    def delete(self, request, **kwargs):

        try:
            person = Person.objects.get(pk=kwargs['person_pk'])
            person.delete()
            return Response(status=HTTP_204_NO_CONTENT)
        except person.DoesNotExist:
            return Response({'message': 'Not Found'}, status=HTTP_404_NOT_FOUND)

    def put(self, request, **kwargs):

        try:
            person = Person.objects.get(pk=kwargs['person_pk'])
            updated_person = PersonSerializer(person, data=request.data)
            if updated_person.is_valid():
                updated_person.save()
                return Response(updated_person.data, status=HTTP_202_ACCEPTED)
            return Response(updated_person.errors, status=HTTP_422_UNPROCESSABLE_ENTITY)
        except Person.DoesNotExist:
            return Response({'message': 'Not Found'}, status=HTTP_404_NOT_FOUND)


class FerryListView(APIView):

    permission_classes = (IsAuthenticated, )

    def post(self, request, pk):
        request.data['booking'] = pk

        ferry = FerrySerializer(data=request.data)

        if ferry.is_valid():
            booking = Booking.objects.get(pk=pk)
            serialized_booking = PopulatedBookingSerializer(booking)
            if len(serialized_booking.data.get('ferry_quote')) == 1:
                return Response({'message': 'maximum of one ferry per booking'}, status=HTTP_422_UNPROCESSABLE_ENTITY)
            ferry.save()
            serialized_updated_booking = PopulatedBookingSerializer(booking)

            return Response(serialized_updated_booking.data, status=HTTP_201_CREATED)

        return Response(ferry.errors, status=HTTP_422_UNPROCESSABLE_ENTITY)

class FerryDetailView(APIView):

    permission_classes = (IsAuthenticated, )

    def delete(self, request, **kwargs):

        try:
            ferry = Ferry.objects.get(pk=kwargs['ferry_pk'])
            ferry.delete()
            return Response(status=HTTP_204_NO_CONTENT)
        except ferry.DoesNotExist:
            return Response({'message': 'Not Found'}, status=HTTP_404_NOT_FOUND)

    def put(self, request, **kwargs):

        try:
            ferry = Ferry.objects.get(pk=kwargs['ferry_pk'])
            updated_ferry = FerrySerializer(ferry, data=request.data)
            if updated_ferry.is_valid():
                updated_ferry.save()
                return Response(updated_ferry.data, status=HTTP_202_ACCEPTED)
            return Response(updated_ferry.errors, status=HTTP_422_UNPROCESSABLE_ENTITY)
        except Ferry.DoesNotExist:
            return Response({'message': 'Not Found'}, status=HTTP_404_NOT_FOUND)