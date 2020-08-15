# Generated by Django 3.1 on 2020-08-14 17:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0003_auto_20200813_0133'),
        ('xss', '0002_xsstrial_created_at'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='xsstrial',
            name='csp',
        ),
        migrations.AddField(
            model_name='xsstrial',
            name='csp',
            field=models.ManyToManyField(blank=True, to='core.CspRule'),
        ),
    ]