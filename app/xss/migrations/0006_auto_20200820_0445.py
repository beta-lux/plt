# Generated by Django 3.1 on 2020-08-20 04:45

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('xss', '0005_auto_20200820_0113'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='xsslog',
            options={'get_latest_by': 'created_at', 'verbose_name': 'XSS 로그', 'verbose_name_plural': 'XSS 로그들'},
        ),
    ]
