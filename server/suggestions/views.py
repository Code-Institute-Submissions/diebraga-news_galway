from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView
from .models import Suggestion
from .serializers import SuggestionSerializer


class SuggestionListView(ListAPIView):
    queryset = Suggestion.objects.order_by('-date_created')
    serializer_class = SuggestionSerializer
    lookup_field = 'slug'
    permission_classes = (permissions.AllowAny, )



