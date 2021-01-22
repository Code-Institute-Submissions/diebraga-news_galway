from rest_framework.response import Response
from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, RetrieveAPIView
from subscriptions.models import Subscription
from subscriptions.serializers import SubscriptionSerializer


class SubscriptionListView(ListAPIView):
    # Retrieve all Subscriptions 
    queryset = Subscription.objects.order_by('-date_created')
    serializer_class = SubscriptionSerializer
    lookup_field = 'title'
    permission_classes = (permissions.IsAuthenticated, )



