from django.urls import path

from . import views

urlpatterns = [
    #
    #Paths de restaurantes
    path('', views.home, name="home"),
]