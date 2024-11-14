from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics

from ..models import *
from ..serializers import *

class Home(APIView):
    def get(self, request):
        content = {'Message': 'Welcome to Marine life'}
        return Response(content)

class MarineList(generics.ListCreateAPIView):
    queryset = Marine.objects.all()
    serializer_class = MarineSerializer

class MarineDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Marine.objects.all()
    serializer_class = MarineSerializer
    lookup_field = 'id'