from rest_framework import viewsets
from rest_framework import permissions

from .models import Log
from .serializers import LogSerializer


class LogApiView(viewsets.ModelViewSet):
    queryset = Log.objects.all().order_by('-date')
    serializer_class = LogSerializer
    permission_classes = [permissions.IsAuthenticated]
