from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class WordCountView(APIView):
    def post(self, request):
        text = request.data.get('text', '')
        word_count = len(text.split())
        return Response({'word_count': word_count}, status=status.HTTP_200_OK)
