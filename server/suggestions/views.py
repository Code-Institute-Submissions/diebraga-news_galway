from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, UpdateAPIView, RetrieveDestroyAPIView, CreateAPIView
from .models import Suggestion
from .serializers import SuggestionSerializer


# If non permission classes default is IsAuthenticated
class SuggestionListView(ListAPIView):
    queryset = Suggestion.objects.order_by('-date_created')
    serializer_class = SuggestionSerializer
    lookup_field = 'slug'
    permission_classes = (permissions.IsAuthenticated, )


class CreateSuggestion(CreateAPIView):
    queryset = Suggestion.objects.order_by('-date_created')
    queryset = Suggestion.objects.all()
    serializer_class = SuggestionSerializer
    permission_classes = (permissions.IsAuthenticated, )


class UpdateSuggestion(UpdateAPIView):
    queryset = Suggestion.objects.order_by('-date_created')
    serializer_class = SuggestionSerializer
    queryset = Suggestion.objects.all()
    permission_classes = (permissions.IsAuthenticated, )


class DeleteSuggestion(RetrieveDestroyAPIView):
    queryset = Suggestion.objects.order_by('-date_created')
    serializer_class = SuggestionSerializer
    queryset = Suggestion.objects.all()
    permission_classes = (permissions.IsAuthenticated, )
