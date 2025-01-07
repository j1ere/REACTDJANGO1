from rest_framework import serializers
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['username','email','password']

    def create(self, validated_data):
        #harsh the password before saving the user 
        user = User(username=validated_data['username'],email=validated_data.get('email',''))
        user.set_password(validated_data['password'])
        user.save()
        return user
    

        