from django.contrib import admin
from .models import Product

class ProductAdmin(admin.ModelAdmin):
    list_display = ('title', 'price', 'price_id', 'date_created')
    list_display_links = ('title', 'price_id')
    search_fields = ('title', )
    list_per_page = 25

admin.site.register(Product, ProductAdmin)