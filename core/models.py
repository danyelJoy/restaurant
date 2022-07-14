from django.db import models

# Create your models here.

class Restaurant(models.Model):

    name = models.CharField(max_length=200, verbose_name='Nombre')
    type_restaurant = models.TextField(verbose_name='Tipo')
    address = models.CharField(max_length=200, verbose_name='Direccion')
    phone = models.TextField('Teléfono')
    image = models.ImageField(verbose_name="Imagen", upload_to="projects")
    description = models.TextField(verbose_name="Descripción")

