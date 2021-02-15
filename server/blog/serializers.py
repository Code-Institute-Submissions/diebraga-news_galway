from rest_framework import serializers
from .models import BlogPost
from comments.models import Comment


class TrackSerializer(serializers.ModelSerializer):
    date_created = serializers.DateTimeField(format="%Y-%m-%d")

    class Meta:
        model = Comment
        fields = ['user_name', 'content', 'id', 'date_created']


class BlogPostSerializer(serializers.ModelSerializer):
    comments = TrackSerializer(many=True, read_only=True,)
    date_created = serializers.DateTimeField(format="%d-%B-%Y")


    class Meta:
        model = BlogPost
        fields = '__all__'
        lookup_field = 'slug'
