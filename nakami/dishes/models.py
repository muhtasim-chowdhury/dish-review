from django.db import models
from django.utils import timezone

class Restaurant(models.Model):
    name = models.CharField(max_length=50)
    date_added = models.DateTimeField("date added")

    def __str__(self):
        return f"{self.name}"


class Dish(models.Model):
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)
    name = models.CharField(max_length=200)
    price = models.IntegerField(default=0)
    date_added = models.DateTimeField("date added", default=timezone.now)

    def __str__(self):
        return f"{self.name} from {self.restaurant}"