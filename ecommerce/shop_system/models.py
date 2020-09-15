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

USER_MODEL = get_user_model()

class Category(models.Model):
    parent = models.ForeignKey(
        'self', default=None, 
        null=True, blank=True, 
        on_delete=models.SET_NULL, 
        related_name='subcategories', 
        verbose_name=_("Parent Category")
    )
    title = models.CharField(max_length=200, verbose_name=_("Title"))
    slug = AutoSlugField(populate_from='get_title_slug',editable=True,always_update=True)
    created_date = models.DateTimeField(auto_now=False, auto_now_add=True, verbose_name=_("Created Date"))
    updated_date = models.DateTimeField(auto_now=True, verbose_name=_("Updated Date"))

    
    def get_title_slug(self):
        return slugify(self.title)
    get_title_slug.short_description = _("Title Slug")

    def subcategories_list(self):
        subcategories = [
            subcategory.title for subcategory in self.subcategories.all()
        ]
        return subcategories
    subcategories_list.short_description = _("SubCategories")

    def __str__(self):
        return self.title
    
    class Meta:
        verbose_name = _("Category")
        verbose_name_plural = _("Categories")
        ordering = ['parent__id',]



def image_upload_to(instance, filename):
    return f'shop_system/{instance.title}/image/{filename}'

class Product(models.Model):

    user = models.ForeignKey(USER_MODEL, related_name='products', on_delete=models.CASCADE)
    title = models.CharField(max_length=200, verbose_name=_("Title"))
    slug = AutoSlugField(populate_from='get_title_slug',editable=True,always_update=True)
    category = models.ManyToManyField(
        Category, related_name='products', 
        blank=True
    )
    description = models.CharField(
        max_length=200, verbose_name=_("Description"),
        blank=True, null=True
    )
    created_date = models.DateTimeField(auto_now=False, auto_now_add=True, verbose_name=_("Created Date"))
    updated_date = models.DateTimeField(auto_now=True, verbose_name=_("Updated Date"))
    image = models.ImageField(upload_to = image_upload_to  , blank=True , verbose_name=_("Image"))

    price = MoneyField(
        max_digits=14, decimal_places=2,
        default_currency='USD', 
    ) # can also be (19,4)

    discount_price = MoneyField(
        max_digits=14, decimal_places=2,
        default_currency='USD', 
    ) # can also be (19,4)


    def get_title_slug(self):
        return slugify(self.title)
    get_title_slug.short_description = _("Title Slug")

    def categories_list(self):
        categories = [
            category.title for category in self.category.all()
        ]
        return categories
    categories_list.short_description = _("Categories")

    def image_thumbnail(self):
        src = self.image.url if self.image else None
        if src:
            return format_html(f"<img width=100 height=75 src='{src}'>")
        else:
            return _("No image")
    image_thumbnail.short_description = _('Image Thumbnail')

    def __str__(self):
        return self.title

    class Meta:
        # db_table = ''
        # managed = True
        verbose_name = 'Product'
        verbose_name_plural = 'Products'

class Order(models.Model):

    STATUS_CHOICES = (
        ("completed","Completed"),
        ("pending","Pending"),
        ("cancelled","Cancelled")
    )

    user = models.ForeignKey(USER_MODEL, verbose_name=_("User"), on_delete=models.CASCADE)
    created_date = models.DateTimeField(auto_now=False, auto_now_add=True, verbose_name=_("Created Date"))
    updated_date = models.DateTimeField(auto_now=True, verbose_name=_("Updated Date"))
    status = models.CharField(_("Order Status"),choices=STATUS_CHOICES, max_length=50)
    

    def __str__(self):
        return self.id

    class Meta:
        # db_table = ''
        # managed = True
        verbose_name = 'Order'
        verbose_name_plural = 'Orders'