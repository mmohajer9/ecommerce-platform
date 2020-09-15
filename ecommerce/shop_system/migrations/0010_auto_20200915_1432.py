# Generated by Django 3.1 on 2020-09-15 10:02

import autoslug.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('shop_system', '0009_auto_20200915_1430'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='slug',
            field=autoslug.fields.AutoSlugField(editable=True, populate_from='get_title_slug'),
        ),
    ]