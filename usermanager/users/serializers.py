from rest_framework import serializers
from .models import CustomUsers


class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUsers
        fields = '__all__'