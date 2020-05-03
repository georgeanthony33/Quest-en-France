from django.urls import path
from .views import BookingListView, BookingDetailView, PersonListView, PersonDetailView, FerryListView, FerryDetailView

urlpatterns = [
    path('', BookingListView.as_view()),
    path('<int:pk>/', BookingDetailView.as_view()),
    path('<int:pk>/people/', PersonListView.as_view()),
    path('<int:pk>/people/<int:person_pk>/', PersonDetailView.as_view()),
    path('<int:pk>/ferry/', FerryListView.as_view()),
    path('<int:pk>/ferry/<int:ferry_pk>/', FerryDetailView.as_view()),
]