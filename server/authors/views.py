from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework import permissions
from .models import Author
from .serializers import AuthorSerializer

# When permisson_classes is not setup default = IsAuthenticated
class AuthorListView(ListAPIView):
    # List authors
    permission_classes = (permissions.AllowAny, )
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer
    pagination_class = None


class AuthorView(RetrieveAPIView):
    # Retrieve author by id
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer
