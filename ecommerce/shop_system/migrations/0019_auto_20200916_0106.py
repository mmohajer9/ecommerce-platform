# Generated by Django 3.1 on 2020-09-15 20:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop_system', '0018_auto_20200916_0055'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='description',
            field=models.CharField(blank=True, max_length=200, null=True, verbose_name='Description'),
        ),
        migrations.AlterField(
            model_name='product',
            name='title',
            field=models.CharField(max_length=200, verbose_name='Title'),
        ),
    ]
