from rest_framework import serializers
from .models import BlogPost
from comments.models import Comment


class TrackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['user_name', 'content', 'id']


class BlogPostSerializer(serializers.ModelSerializer):
    comments = TrackSerializer(many=True, read_only=True,)

    class Meta:
        model = BlogPost
        fields = '__all__'
        lookup_field = 'slug'
