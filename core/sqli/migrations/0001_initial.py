# Generated by Django 3.1.5 on 2021-01-16 12:07

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='SqliLog',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('from_team', models.CharField(max_length=20)),
                ('to_team', models.CharField(max_length=20)),
                ('query', models.CharField(max_length=1000)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('succeed', models.BooleanField(default=False)),
                ('return_value', models.CharField(max_length=1000)),
            ],
            options={
                'verbose_name': 'SQLi 로그',
                'verbose_name_plural': 'SQLi 로그들',
                'get_latest_by': 'created_at',
            },
        ),
    ]
