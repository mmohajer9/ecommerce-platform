from django.db import models
from django.utils.translation import gettext_lazy as _
from django.core.exceptions import ValidationError
from django.utils.html import format_html
from django.utils import timezone
from datetime import timedelta
from django.contrib.auth import get_user_model
from autoslug import AutoSlugField
from django.utils.text import slugify

# Create your models here.

USER_MODEL = get_user_model()

class Product(models.Model):

    user = models.ForeignKey(USER_MODEL, related_name='products', on_delete=models.CASCADE)
    title = models.CharField(max_length=200, verbose_name="Title")
    created_date = models.DateTimeField(auto_now=False, auto_now_add=True, verbose_name=_("Created Date"))
    updated_date = models.DateTimeField(auto_now=True, verbose_name=_("Updated Date"))


    def get_title_slug(self):
        return slugify(self.title)

    def __str__(self):
        return self.title

    class Meta:
        # db_table = ''
        # managed = True
        verbose_name = 'Product'
        verbose_name_plural = 'Products'