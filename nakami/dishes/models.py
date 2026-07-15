from django.db import models
from django.utils import timezone
from datetime import timedelta

class Restaurant(models.Model):
    name = models.CharField(max_length=50)
    address = models.CharField(max_length=50, default="123 Main Street City, State")
    date_added = models.DateTimeField("date added")

    def __str__(self):
        return f"{self.name}"


class Dish(models.Model):
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)
    name = models.CharField(max_length=200)
    price = models.IntegerField(default=0)
    date_added = models.DateTimeField("date added", default=timezone.now)

    def isNew(self):
        diff = timezone.now() - self.date_added
        return diff < timedelta(days=30)

    def __str__(self):
        return f"{self.name} from {self.restaurant}"