from .views import *
from django.urls import path

urlpatterns = [
    path('', Home.as_view(), name='home'),
    path('marines/', MarineList.as_view(), name='marine-list'),
    path('marines/<int:id>/', MarineDetail.as_view(), name='marine-detail'),
]