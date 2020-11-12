from django.db import models
from datetime import datetime

class Author(models.Model):
    name = models.CharField(max_length=50)
    photo = models.ImageField(upload_to='photos/%Y/%m/%d/')
    role = models.CharField(max_length=20)
    phone = models.CharField(max_length=20)
    email = models.CharField(max_length=100)
    day_born = models.CharField(max_length=2)
    month_born = models.CharField(max_length=2)
    year_born = models.CharField(max_length=4)
    date_hired = models.DateTimeField(default=datetime.now, blank=True)

    def __str__(self):
        return self.name