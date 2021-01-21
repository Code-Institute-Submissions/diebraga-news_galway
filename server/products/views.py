from rest_framework.response import Response
from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, RetrieveAPIView
from products.models import Product
from products.serializers import ProductSerializer


class ProductListView(ListAPIView):
    # Retrieve all products 
    queryset = Product.objects.order_by('-date_created')
    serializer_class = ProductSerializer
    lookup_field = 'title'
    permission_classes = (permissions.AllowAny, )



