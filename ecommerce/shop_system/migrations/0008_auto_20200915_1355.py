# Generated by Django 3.1 on 2020-09-15 09:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop_system', '0007_auto_20200915_1352'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='slug',
            field=models.SlugField(max_length=200, verbose_name='Slug'),
        ),
    ]
