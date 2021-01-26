from django.db import models
from datetime import datetime
from django.template.defaultfilters import slugify


class Suggestion(models.Model):
    user = models.EmailField(max_length=950)
    topic = models.CharField(max_length=50)
    slug = models.SlugField(blank=True)
    content = models.TextField(max_length=950, blank=False)
    read = models.BooleanField(default=False, blank=True)
    date_created = models.DateTimeField(default=datetime.now, blank=True)

    def save(self, *args, **kwargs):
        original_slug = slugify(self.topic)
        queryset = Suggestion.objects.all().filter(slug__iexact=original_slug).count()

        count = 1
        slug = original_slug
        while(queryset):
            slug = original_slug + '-' + str(count)
            count += 1
            queryset = Suggestion.objects.all().filter(slug__iexact=slug).count()
        
        self.slug = slug
            
        super(Suggestion, self).save(*args, **kwargs)

    def __str__(self):
        return self.topic
