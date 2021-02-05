from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, UpdateAPIView, RetrieveDestroyAPIView, CreateAPIView, RetrieveAPIView
from .models import Suggestion
from .serializers import SuggestionSerializer
from rest_framework.permissions import SAFE_METHODS, BasePermission

class EditCustomPermission(BasePermission):
    message = 'Editing suggestions is restricted to the creator only.'

    def has_object_permission(self, request, view, obj):

        if request.method in SAFE_METHODS:
            return True

        return obj.user == request.user


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


class UpdateSuggestion(UpdateAPIView, EditCustomPermission):
    queryset = Suggestion.objects.order_by('-date_created')
    serializer_class = SuggestionSerializer
    queryset = Suggestion.objects.all()
    permission_classes = [EditCustomPermission]


class DeleteSuggestion(RetrieveDestroyAPIView, EditCustomPermission):
    queryset = Suggestion.objects.order_by('-date_created')
    serializer_class = SuggestionSerializer
    queryset = Suggestion.objects.all()
    permission_classes = [EditCustomPermission]


# The IsAdminUser permission class will deny permission to any user, unless user.is_staff is True in which case permission will be allowed.
# This permission is suitable if you want your API to only be accessible to a subset of trusted administrators.

