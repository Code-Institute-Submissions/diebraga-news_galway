from django.contrib import admin
from .models import Comment


class CommentAdmin(admin.ModelAdmin):
    list_display = ('post', 'user', 'date_created')
    list_display_links = ('post', 'user')
    list_filter = ('post', 'date_created',)
    search_fields = ('post', )
    list_per_page = 25

    def save_model(self, request, obj, form, change):
        if not obj.created_by:
            obj.user = request.user
        obj.save()


admin.site.register(Comment, CommentAdmin)