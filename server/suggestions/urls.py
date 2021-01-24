from django.urls import path
from .views import SuggestionListView

urlpatterns = [
    path('', SuggestionListView.as_view()),
]
