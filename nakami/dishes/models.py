from django.db import models

class Restaurant(models.Model):
    name = models.CharField(max_length=50)
    date_added = models.DateTimeField("date added")


class Dish(models.Model):
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)
    name = models.CharField(max_length=200)
    price = models.IntegerField(default=0)