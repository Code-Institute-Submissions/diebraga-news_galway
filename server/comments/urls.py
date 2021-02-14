from django.urls import path
from .views import CommentListView, CreateComment, UpdateComment, DeleteComment, CommentView


urlpatterns = [
    path('', CommentListView.as_view()),
    path('create', CreateComment.as_view()),
    path('update/<int:pk>', UpdateComment.as_view()),
    path('delete/<int:pk>', DeleteComment.as_view()),
    path('<pk>', CommentView.as_view()),
]
