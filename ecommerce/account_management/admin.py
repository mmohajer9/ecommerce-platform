from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.utils.translation import gettext_lazy as _
from django.contrib.auth import get_user_model

# Register your models here.

from .models import (
    User,
    Country,
    State,
    City,
    Address,
)

class MyUserAdmin(UserAdmin):
    list_display = (
        'username','email', 
        'first_name','last_name', 
        'profile_pic_thumbnail',
        'is_superuser' , 'is_staff'
    )

MyUserAdmin.fieldsets += (
    ("Extra Added Fields", {
        'fields': ('birth_date', 'mobile_phone', 'telephone', 'profile_pic', 'gender')
    }),
)

admin.site.register(User, MyUserAdmin)
admin.site.site_header = _("E-Commerce Platform")


class CountryAdmin(admin.ModelAdmin):
    list_display = ('name', 'state_count', 'city_count')
    # list_filter = (['status'])
    # search_fields = ('title', 'slug')
    # prepopulated_fields = {'slug': ('title',)}


admin.site.register(Country, CountryAdmin)


class StateAdmin(admin.ModelAdmin):
    list_display = ('name', 'id', 'city_count')
    # list_filter = (['status'])
    # search_fields = ('title', 'slug')
    # prepopulated_fields = {'slug': ('title',)}


admin.site.register(State, StateAdmin)


class CityAdmin(admin.ModelAdmin):
    list_display = ('name', 'id', 'address_count')
    # list_filter = (['status'])
    # search_fields = ('title', 'slug')
    # prepopulated_fields = {'slug': ('title',)}


admin.site.register(City, CityAdmin)


class AddressAdmin(admin.ModelAdmin):
    list_display = (
        'user', 'full_name', 
        'id', 'country', 'state',
        'city', 'postal_code', 
        'address_line1', 'address_line2'
    )
    # list_filter = (['status'])
    search_fields = ('user__username', 'postal_code__startswith')
    # prepopulated_fields = {'slug': ('title',)}


admin.site.register(Address, AddressAdmin)