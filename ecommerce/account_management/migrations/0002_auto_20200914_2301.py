# Generated by Django 3.1 on 2020-09-14 18:31

import account_management.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account_management', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='birth_date',
            field=models.DateField(blank=True, null=True, verbose_name='Birth Date'),
        ),
        migrations.AlterField(
            model_name='user',
            name='gender',
            field=models.CharField(blank=True, choices=[('male', 'Male'), ('female', 'Female'), ('other', 'Other')], max_length=10, null=True, verbose_name='Gender'),
        ),
        migrations.AlterField(
            model_name='user',
            name='mobile_phone',
            field=models.CharField(blank=True, max_length=15, null=True, unique=True, verbose_name='Mobile Phone'),
        ),
        migrations.AlterField(
            model_name='user',
            name='profile_pic',
            field=models.ImageField(blank=True, upload_to=account_management.models.profile_pic_upload_to, verbose_name='Profile Picture'),
        ),
        migrations.AlterField(
            model_name='user',
            name='telephone',
            field=models.CharField(blank=True, max_length=15, null=True, unique=True, verbose_name='Telephpne'),
        ),
    ]