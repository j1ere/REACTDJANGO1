from rest_framework import views
from rest_framework.response import Response
from rest_framework import status
from .serializers import UserSerializer

class RegisterAPIView(views.APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                {'message':'registration success jr'},
                status=status.HTTP_201_CREATED
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token

class LoginAPIView(views.APIView):
    def post(self, request):
        username  = request.data.get('username')
        password = request.data.get('password')

        user= authenticate(username=username,password=password)
        if user:
            #generate or create token
            token, created = Token.objects.get_or_create(user=user)
            return Response({'message':'login success jr', 'token':token.key}, status=status.HTTP_200_OK)
        return Response({'error':'invalid username or password'}, status=status.HTTP_401_UNAUTHORIZED)
            