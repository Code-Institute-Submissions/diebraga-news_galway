from django.db import models
from datetime import datetime

class Author(models.Model):
    name = models.CharField(max_length=50)
    photo_link = models.CharField(max_length=600, blank=False)
    city = models.CharField(max_length=20)
    job = models.TextField(max_length=20, blank=False)
    phone = models.CharField(max_length=20)
    email = models.CharField(max_length=100)
    date_register = models.DateTimeField(default=datetime.now, blank=True)

    def __str__(self):
        return self.name
