from django.db import models
from django.utils.translation import gettext_lazy as _
from django.core.exceptions import ValidationError
from django.utils.html import format_html
from django.utils import timezone
from datetime import timedelta
from django.contrib.auth import get_user_model

def brand_image_upload_to(instance, filename):
    return f'settings_manager/{instance.title}/brand_image/{filename}'

class HomepageSetting(models.Model):

    LANG_CHOICES = (
        ("en","English"),
        ("fa","Farsi/Persian")
    )

    setting_title = models.CharField(max_length=200, verbose_name=_("Setting Title"))
    language = models.CharField(_("Language"),choices=LANG_CHOICES, max_length=50)
    brand_name = models.CharField(max_length=200, verbose_name=_("Brand Name"))
    brand_image = models.ImageField(upload_to = brand_image_upload_to  , blank=True , verbose_name=_("Image"))



    def __str__(self):
        return self.title

    class Meta:
        db_table = ''
        managed = True
        verbose_name = 'HomepageSetting'
        verbose_name_plural = 'HomepageSettings'