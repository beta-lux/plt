from django.contrib import admin
from .models import Team, SqliFilter, SstiFilter, XssFilter
from xss.models import XssTrial

# Register your models here.

admin.site.register(Team)
admin.site.register(SqliFilter)
admin.site.register(SstiFilter)
admin.site.register(XssFilter)
admin.site.register(XssTrial)