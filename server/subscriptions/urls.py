from django.urls import path
from subscriptions.views import SubscriptionListView


urlpatterns = [
    path('', SubscriptionListView.as_view()),
]
