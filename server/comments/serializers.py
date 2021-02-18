from rest_framework import serializers
from .models import Comment


class CommentSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(source='user.email', read_only=True, default=serializers.CurrentUserDefault())
    # Save current logged user that make the comment and return aser email instead of user id
    
    class Meta:
        model = Comment
        fields = '__all__'

    def save(self, **kwargs):
        """Include default for read_only `user` field"""
        kwargs["user"] = self.fields["user"].get_default()
        return super().save(**kwargs)
