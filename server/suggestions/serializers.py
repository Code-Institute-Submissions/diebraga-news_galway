from rest_framework import serializers
from .models import Suggestion


class SuggestionSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(source='user.email', read_only=True, default=serializers.CurrentUserDefault())
    #  Save model logged user to send request and return user email instead of user id
    
    class Meta:
        model = Suggestion
        fields = '__all__'
        lookup_field = 'slug'

    def save(self, **kwargs):
        """Include default for read_only `user` field"""
        kwargs["user"] = self.fields["user"].get_default()
        return super().save(**kwargs)
