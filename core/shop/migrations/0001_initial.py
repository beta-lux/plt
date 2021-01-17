# Generated by Django 3.1.5 on 2021-01-17 02:51

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('base', '0002_csprule_lenrule_regexrule_sqlifilter_xssfilter'),
    ]

    operations = [
        migrations.CreateModel(
            name='RegexItem',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50)),
                ('description', models.TextField()),
                ('category', models.CharField(choices=[('sqli', 'SQLi'), ('xss', 'XSS')], max_length=20)),
                ('price', models.IntegerField()),
                ('regex_rule', models.ManyToManyField(to='base.RegexRule')),
                ('teams', models.ManyToManyField(blank=True, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': '차단 규칙 아이템',
                'verbose_name_plural': '차단 규칙 아이템들',
            },
        ),
        migrations.CreateModel(
            name='LenItem',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50)),
                ('description', models.TextField()),
                ('category', models.CharField(choices=[('sqli', 'SQLi'), ('xss', 'XSS')], max_length=20)),
                ('price', models.IntegerField()),
                ('len_rule', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='base.lenrule')),
                ('teams', models.ManyToManyField(blank=True, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': '길이 제한 아이템',
                'verbose_name_plural': '길이 제한 아이템들',
            },
        ),
        migrations.CreateModel(
            name='CspItem',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50)),
                ('description', models.TextField()),
                ('category', models.CharField(choices=[('sqli', 'SQLi'), ('xss', 'XSS')], max_length=20)),
                ('price', models.IntegerField()),
                ('csp_rule', models.ManyToManyField(to='base.CspRule')),
                ('teams', models.ManyToManyField(blank=True, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'CSP 아이템',
                'verbose_name_plural': 'CSP 아이템들',
            },
        ),
    ]
