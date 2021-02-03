from django.contrib import admin
from .models import Suggestion


class SuggestionAdmin(admin.ModelAdmin):
    list_display = ('topic', 'user', 'date_created')
    list_display_links = ('topic', 'user')
    list_filter = ('topic', 'date_created',)
    search_fields = ('topic', )
    list_per_page = 25

    def save_model(self, request, obj, form, change):
        if not obj.created_by:
            obj.user = request.user
        obj.save()


admin.site.register(Suggestion, SuggestionAdmin)