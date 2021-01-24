from django.contrib import admin
from .models import Suggestion

class SuggestionAdmin(admin.ModelAdmin):
    list_display = ('topic', 'id', 'date_created')
    list_display_links = ('topic', 'id')
    search_fields = ('topic', )
    list_per_page = 25

admin.site.register(Suggestion, SuggestionAdmin)