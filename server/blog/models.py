from django.db import models
from datetime import datetime
from django.template.defaultfilters import slugify
from authors.models import Author


class Categories(models.TextChoices):
    # Categories
    NEWS = 'news'
    EVENTS = 'events'
    GASTRONOMY = 'gastronomy'
    JOBS = 'jobs'
    

class BlogPost(models.Model):
    # Model fields create posts and associate to authors model.
    author = models.ForeignKey(Author, on_delete=models.DO_NOTHING)
    title = models.CharField(max_length=50)
    slug = models.SlugField()
    category = models.CharField(max_length=50, choices=Categories.choices, default=Categories.NEWS)
    thumbnail = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    excerpt = models.CharField(max_length=150, blank=False)
    content = models.TextField()
    featured = models.BooleanField(default=False)
    date_created = models.DateTimeField(default=datetime.now, blank=True)

    def save(self, *args, **kwargs):
        # Func creates unique id in case same title.
        original_slug = slugify(self.title)
        queryset = BlogPost.objects.all().filter(slug__iexact=original_slug).count()

        count = 1
        slug = original_slug
        while(queryset):
            slug = original_slug + '-' + str(count)
            count += 1
            queryset = BlogPost.objects.all().filter(slug__iexact=slug).count()
        
        self.slug = slug
            
        if self.featured:
            try:
                temp = BlogPost.objects.get(featured=True)
                if self != temp:
                    temp.featured = False
                    temp.save()
            except BlogPost.DoesNotExist:
                pass
        super(BlogPost, self).save(*args, **kwargs)

    def __str__(self):
        return self.title
