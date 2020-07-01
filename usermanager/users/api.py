from .models import CustomUsers
from rest_framework import viewsets
from .serializers import CustomUserSerializer


class UsersViewSet(viewsets.ModelViewSet):
    serializer_class = CustomUserSerializer
    queryset = CustomUsers.objects.all()

    # def get_queryset(self):
    #     return self.request.CustomUsers.objects.all()