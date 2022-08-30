import imp
from django.urls import include, path
from rest_framework import routers

from moodJournal_api import views

router = routers.DefaultRouter()
router.register(r'logs', views.LogApiView)

urlpatterns = [
    path('', include(router.urls))
]
