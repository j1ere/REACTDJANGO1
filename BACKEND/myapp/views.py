from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication

class WordCountView(APIView):
    authentication_classes = [TokenAuthentication]#enforces token authentication
    permission_classes = [IsAuthenticated]#requires the user to be authenticated

    def post(self, request):
        text = request.data.get('text', '')
        word_count = len(text.split())
        return Response({'word_count': word_count}, status=status.HTTP_200_OK)
