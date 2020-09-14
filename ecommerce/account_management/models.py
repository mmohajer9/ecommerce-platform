from django.db import models
from django.contrib.auth.models import( 
    AbstractUser,
    AbstractBaseUser,
    PermissionsMixin,
    UserManager
)
from django.utils.translation import gettext_lazy as _
from django.core.exceptions import ValidationError
from django.utils.html import format_html
from django.utils import timezone
from datetime import timedelta

def profile_pic_upload_to(instance, filename):
    return f'account_management/{instance.username}/profile_pics/{filename}'
# Create your models here.
class User(AbstractUser):

    email = models.EmailField(_('email address'), unique=True)

    GENDER_CHOICES = (
        ("male","Male"),
        ("female","Female"),
        ("other","Other"),
    )

    birth_date = models.DateField(auto_now=False, auto_now_add=False , blank=True, null=True , verbose_name=_("Birth Date"))
    mobile_phone = models.CharField(blank=True, null=True,max_length=15 , unique = True, verbose_name=_("Mobile Phone"))
    telephone = models.CharField(blank=True, null=True,max_length=15 , unique = True, verbose_name=_("Telephpne"))
    profile_pic = models.ImageField(upload_to = profile_pic_upload_to  , blank=True , verbose_name=_("Profile Picture"))
    gender = models.CharField(max_length=10 , choices=GENDER_CHOICES, blank=True, null=True, verbose_name=_("Gender"))
    

    def profile_pic_thumbnail(self):
        src = self.profile_pic.url if self.profile_pic else None
        if src:
            return format_html(f"<img width=100 height=75 src='{src}'>")
        else:
            return _("No Picture")
    

    class Meta:
        # db_table = ''
        # managed = True
        verbose_name = _('User')
        verbose_name_plural = _('Users')
        # unique_together = ('email',)

