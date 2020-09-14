from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.utils.translation import gettext_lazy as _
from django.contrib.auth import get_user_model

# Register your models here.

from .models import (
    User,
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