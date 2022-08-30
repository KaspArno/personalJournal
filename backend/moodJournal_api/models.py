from datetime import datetime
from pyexpat import model
from django.db import models


class Mood(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(blank=False, max_length=20)

    def __str__(self):
        return self.name


class Log(models.Model):
    date = models.DateTimeField(default=datetime.now)
    created_at = models.DateTimeField(auto_now_add=True)
    last_updated = models.DateTimeField(auto_now=True)
    note = models.TextField(blank=True)
    mood = models.ForeignKey('Mood', on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return (str(self.date))
