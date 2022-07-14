from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
from .models import Restaurant


def home(request):
    restaurants = Restaurant.objects.all()
    return render(request, "core/home.html", {'restaurants', restaurants})
