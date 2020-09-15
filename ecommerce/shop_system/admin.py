from django.contrib import admin
from .models import (
    Product,
    Category
)
# Register your models here.

class ProductAdmin(admin.ModelAdmin):
    list_display = (
        'title','user',
        'get_title_slug',
        'created_date','updated_date',
    )
    # list_filter = ([])
    # search_fields = ('name', 'university')

    prepopulated_fields = {'slug': ('title',)}

admin.site.register(Product , ProductAdmin)

class CategoryAdmin(admin.ModelAdmin):
    list_display = (
        'title','parent',
        'get_title_slug',
        'created_date','updated_date',
    )
    # list_filter = ([])
    # search_fields = ('name', 'university')
    
    prepopulated_fields = {'slug': ('title',)}

admin.site.register(Category , CategoryAdmin)