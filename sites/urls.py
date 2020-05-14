from django.urls import path
from .views import ListView, AllReviews, DetailView, ReviewListView, ReviewDetailView

urlpatterns = [
    path('', ListView.as_view()),
    path('<int:pk>/', DetailView.as_view()),
    path('reviews/', AllReviews.as_view()),
    path('<int:pk>/reviews/', ReviewListView.as_view()),
    path('<int:pk>/reviews/<int:review_pk>/', ReviewDetailView.as_view()),
]