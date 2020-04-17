from django.urls import path
from .views import ListView, DetailView

urlpatterns = [
    path('', ListView.as_view(), name='homes-list'),
    path('<int:pk>/', DetailView.as_view(), name='homes-detail'),
]