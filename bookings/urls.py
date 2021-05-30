from django.urls import path
from django.conf.urls import url
from .views import BookingListView, BookingDetailView, BookingAvailabilityView, PersonListView, PersonDetailView, FerryListView, FerryDetailView, PaymentDetailsView

urlpatterns = [
    path('', BookingListView.as_view()),
    path('availability/', BookingAvailabilityView.as_view()),
    path('<int:pk>/', BookingDetailView.as_view()),
    path('<int:pk>/people/', PersonListView.as_view()),
    path('<int:pk>/people/<int:person_pk>/', PersonDetailView.as_view()),
    path('<int:pk>/ferry/', FerryListView.as_view()),
    path('<int:pk>/ferry/<int:ferry_pk>/', FerryDetailView.as_view()),
    path('save-stripe-info/', PaymentDetailsView.as_view())
]