from django.db import models

ANIMALS = (
    ('D', 'Dolphin'),
    ('S', 'Shrimp'),
    ('C', 'Clownfish'),
    ('S', 'Starfish'),
    ('W', 'Whale'),
)

# Create your models here.
class Marine(models.Model):
    name = models.CharField(max_length=100)
    animal = models.CharField(
        max_length=1,
        choices=ANIMALS,
        blank=False,
        null=False
    )
    description = models.TextField(max_length=250)
    age = models.IntegerField()

    def __str__(self):
        return f'{self.name} (a {self.get_animal_display()})'