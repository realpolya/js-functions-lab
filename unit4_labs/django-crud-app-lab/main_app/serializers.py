from rest_framework import serializers
from .models import *

class MarineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Marine
        fields = '__all__'
