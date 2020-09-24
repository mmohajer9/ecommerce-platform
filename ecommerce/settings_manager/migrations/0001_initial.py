# Generated by Django 3.1 on 2020-09-24 12:32

from django.db import migrations, models
import settings_manager.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='HomepageSetting',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('setting_title', models.CharField(max_length=200, verbose_name='Setting Title')),
                ('language', models.CharField(choices=[('en', 'English'), ('fa', 'Farsi/Persian')], max_length=50, verbose_name='Language')),
                ('brand_name', models.CharField(max_length=200, verbose_name='Brand Name')),
                ('brand_image', models.ImageField(blank=True, upload_to=settings_manager.models.brand_image_upload_to, verbose_name='Image')),
            ],
            options={
                'verbose_name': 'HomepageSetting',
                'verbose_name_plural': 'HomepageSettings',
                'db_table': '',
                'managed': True,
            },
        ),
    ]