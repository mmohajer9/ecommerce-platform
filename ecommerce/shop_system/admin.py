from django.contrib import admin
from .models import (
    Product,
    Category,
    Order,
    OrderItem
)
# Register your models here.

class ProductAdmin(admin.ModelAdmin):
    list_display = (
        'title','id','user',
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
        'title','alt_title','id','parent',
        'slug','subcategories_list',
        'created_date','updated_date',
    )
    # list_filter = ([])
    # search_fields = ('name', 'university')
    
    prepopulated_fields = {'slug': ('title',)}

admin.site.register(Category , CategoryAdmin)


class OrderAdmin(admin.ModelAdmin):
    list_display = (
        'user','id','created_date',
        'updated_date','status'
    )
    # list_filter = ([])
    # search_fields = ('name', 'university')
    
    # prepopulated_fields = {'slug': ('title',)}

admin.site.register(Order , OrderAdmin)

class OrderItemAdmin(admin.ModelAdmin):
    list_display = (
        'product','id','order',
        'quantity','date_added'
    )
    # list_filter = ([])
    # search_fields = ('name', 'university')
    
    # prepopulated_fields = {'slug': ('title',)}

admin.site.register(OrderItem , OrderItemAdmin)