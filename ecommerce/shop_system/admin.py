from django.contrib import admin
from .models import (
    Product,
    Category
)
# Register your models here.

class ProductAdmin(admin.ModelAdmin):
    list_display = (
        'title','user',
        'image_thumbnail',
        'slug','categories_list',
        'price','discount_price',
        'created_date','updated_date',
    )
    # list_filter = ([])
    # search_fields = ('name', 'university')

    prepopulated_fields = {'slug': ('title',)}

admin.site.register(Product , ProductAdmin)

class CategoryAdmin(admin.ModelAdmin):
    list_display = (
        'title','parent',
        'slug','subcategories_list',
        'created_date','updated_date',
    )
    # list_filter = ([])
    # search_fields = ('name', 'university')
    
    prepopulated_fields = {'slug': ('title',)}

admin.site.register(Category , CategoryAdmin)