from django.db import models
from datetime import datetime
from django.template.defaultfilters import slugify


class Subscription(models.Model):
    # Model fields create subscripotions.
    title = models.CharField(max_length=50)
    description = models.CharField(max_length=150, blank=False)
    # Price_id create on stripe dashboard
    price_id = models.CharField(max_length=40)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    date_created = models.DateTimeField(default=datetime.now, blank=True)

    def __str__(self):
        return self.title
