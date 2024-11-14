import datetime
from .model_marine import Marine
from django.db import models

class Spotting(models.Model):
    date = models.DateField(
        'When spotted',
        default=datetime.date.today
    )
    marine = models.ForeignKey(Marine, on_delete=models.CASCADE)