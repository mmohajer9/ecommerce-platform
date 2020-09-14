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


class Country(models.Model):
   
    name = models.CharField(max_length=100 , unique = True , verbose_name=_("Country Name"))

    def __str__(self):
        return self.name

    def state_count(self):
        return (self.state_set.count())
    state_count.short_description = _("States Count")

    def city_count(self):
        return (City.objects.filter(state__country = self).count())
    city_count.short_description = _("Cities Count")

    class Meta:
        verbose_name = _('Country')
        verbose_name_plural = _('Countries')


class State(models.Model):
    
    country = models.ForeignKey(Country, on_delete=models.CASCADE, verbose_name=_("Country"))   
    name = models.CharField(max_length=100, verbose_name=_("State Name"))

    def city_count(self):
        return (self.city_set.count())
    city_count.short_description = _("Cities Count")


    class Meta:
        verbose_name = _('State')
        verbose_name_plural = _('States')
        unique_together = ('country','name')

        
    def __str__(self):
        return self.name


class City(models.Model):
    
    state = models.ForeignKey(State , on_delete=models.CASCADE , verbose_name=_("State"))    
    name = models.CharField(max_length=100 , blank=True, null=True , verbose_name=_("City Name"))

    class Meta:
        verbose_name = _('City')
        verbose_name_plural = _('Cities')
        unique_together = ('state','name')


    def address_count(self):
        return (self.address_set.count())
    address_count.short_description = _('Addresses Count')

    def __str__(self):
        return self.name



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

class Address(models.Model):

    user = models.OneToOneField(User, on_delete=models.CASCADE, verbose_name=_("User"))
    city = models.ForeignKey(City, on_delete=models.CASCADE, verbose_name=_("City"))
    postal_code = models.CharField(max_length=20, verbose_name=_("Postal/Zip Code"))
    address_line1 = models.CharField(max_length=100, verbose_name=_("Address Line 1"))
    address_line2 = models.CharField(max_length=100 , blank=True, null=True, verbose_name=_("Address Line 2"))


    def __str__(self):
        return self.user.full_name()

    def country(self):
        return self.city.state.country
    country.short_description = _('Country') 

    def state(self):
        return self.city.state
    state.short_description = _('State')

    def full_name(self):
        return self.user.get_full_name()
    full_name.short_description = _('Full Name')