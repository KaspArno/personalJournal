from rest_framework import serializers
from .models import Mood, Log


class LogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Log
        fields = ["date", "mood", "note"]
