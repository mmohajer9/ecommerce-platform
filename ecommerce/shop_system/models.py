from django.db import models
from django.utils.translation import gettext_lazy as _
from django.core.exceptions import ValidationError
from django.utils.html import format_html
from django.utils import timezone
from datetime import timedelta
from django.contrib.auth import get_user_model

#? for slugification
from autoslug import AutoSlugField
from django.utils.text import slugify

#? django-money
from djmoney.models.fields import MoneyField
from djmoney.money import Money #* for using for searchs and filters

# Create your models here.

class Category(models.Model):
	parent = models.ForeignKey(
        'self', default=None, 
        null=True, blank=True, 
        on_delete=models.SET_NULL, 
        related_name='subcategories', 
        verbose_name=_("SubCategory")
    )
	title = models.CharField(max_length=200, verbose_name=_("Title"))
	slug = models.SlugField(max_length=100, unique=True, verbose_name=_("Slug"))
	class Meta:
		verbose_name = _("Category")
		verbose_name_plural = _("Categories")
		ordering = ['parent__id',]

	def __str__(self):
		return self.title


USER_MODEL = get_user_model()

class Product(models.Model):

    user = models.ForeignKey(USER_MODEL, related_name='products', on_delete=models.CASCADE)
    title = models.CharField(max_length=200, verbose_name=_("Title"))
    slug = AutoSlugField(populate_from='get_title_slug',editable=True,always_update=True)
    category = models.ForeignKey(
        Category, related_name='products', 
        on_delete=models.CASCADE,
        blank=True, null=True
    )
    created_date = models.DateTimeField(auto_now=False, auto_now_add=True, verbose_name=_("Created Date"))
    updated_date = models.DateTimeField(auto_now=True, verbose_name=_("Updated Date"))

    price = MoneyField(
        max_digits=14, decimal_places=2,
        default_currency='USD', 
    ) # can also be (19,4)


    def get_title_slug(self):
        return slugify(self.title)
    
    get_title_slug.short_description = _("Title Slug")

    def __str__(self):
        return self.title

    class Meta:
        # db_table = ''
        # managed = True
        verbose_name = 'Product'
        verbose_name_plural = 'Products'