from django.urls import path
from .views import AuthorListView, AuthorView

urlpatterns = [
    path('', AuthorListView.as_view()),
    path('<pk>', AuthorView.as_view()),
]
