from django.db import models
from django.conf import settings  
from pytz import timezone



class SqliLog(models.Model):
    from_team = models.CharField(max_length=20)
    to_team = models.CharField(max_length=20)
    query = models.CharField(max_length=1000)
    created_at = models.DateTimeField(auto_now_add=True)
    succeed = models.BooleanField(default=False)
    return_value = models.CharField(max_length=1000)

    @property
    def created_at_korean_time(self):
        korean_timezone = timezone(settings.TIME_ZONE)
        return self.created_at.astimezone(korean_timezone)

    def __str__(self):
        return f"SQLi query from {self.from_team} to {self.to_team}"

    class Meta:
        verbose_name = "SQLi 로그"
        verbose_name_plural = "SQLi 로그들"
        get_latest_by = "created_at"