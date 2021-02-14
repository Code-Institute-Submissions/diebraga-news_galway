from django.db import models
from datetime import datetime
from accounts.models import UserAccount
from blog.models import BlogPost


class Comment(models.Model):
    user = models.ForeignKey(UserAccount, related_name='comments', on_delete=models.CASCADE, editable=False,null=True,blank=True)
    post = models.ForeignKey(BlogPost, related_name='comments', on_delete=models.CASCADE)
    content = models.TextField(max_length=950, blank=False)
    date_created = models.DateTimeField(default=datetime.now, blank=True)

    @property
    def user_name(self):
        return self.user.name

    def __str__(self):
        return self.content
