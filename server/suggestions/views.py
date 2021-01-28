from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, UpdateAPIView, RetrieveDestroyAPIView, CreateAPIView, RetrieveAPIView
from .models import Suggestion
from .serializers import SuggestionSerializer


# If non permission classes default is IsAuthenticated
class SuggestionListView(ListAPIView):
    queryset = Suggestion.objects.order_by('-date_created')
    serializer_class = SuggestionSerializer
    lookup_field = 'slug'


class SuggestionView(RetrieveAPIView):
    queryset = Suggestion.objects.order_by('-date_created')
    queryset = Suggestion.objects.all()
    serializer_class = SuggestionSerializer


class CreateSuggestion(CreateAPIView):
    queryset = Suggestion.objects.order_by('-date_created')
    queryset = Suggestion.objects.all()
    serializer_class = SuggestionSerializer


class UpdateSuggestion(UpdateAPIView):
    queryset = Suggestion.objects.order_by('-date_created')
    serializer_class = SuggestionSerializer
    queryset = Suggestion.objects.all()
    permission_classes = (permissions.IsAdminUser, )


class DeleteSuggestion(RetrieveDestroyAPIView):
    queryset = Suggestion.objects.order_by('-date_created')
    serializer_class = SuggestionSerializer
    queryset = Suggestion.objects.all()
    permission_classes = (permissions.IsAdminUser, )


# The IsAdminUser permission class will deny permission to any user, unless user.is_staff is True in which case permission will be allowed.
# This permission is suitable if you want your API to only be accessible to a subset of trusted administrators.

