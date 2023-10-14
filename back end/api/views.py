from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Note
from .serializers import NoteSerializer



#This function get routes is not neccessary for the functioning of the application.
#It was just created for learning purposes.
@api_view(['GET'])
def getRoutes(request):
    routes = [
        {
            'Endpoint': '/notes/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of notes'
        },
        {
            'Endpoint': '/notes/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single note object'
        },
        {
            'Endpoint': '/notes/create/',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Creates new note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/update/',
            'method': 'PUT',
            'body': {'body': ""},
            'description': 'Creates an existing note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/delete/',
            'method': 'DELETE',
            'body': None,
            'description': 'Deletes and exiting note'
        },
    ]
    return Response(routes)

#This functions returns all the notes in the database.
@api_view(["GET"])
def getNotes(request):
    notes = Note.objects.all()
    serializer = NoteSerializer(notes , many = True)
    return Response(serializer.data)

#This function returns a single note in the database.
@api_view(['GET'])
def getNote(request, pk):
    note = Note.objects.get(id = pk)
    serializer = NoteSerializer(note , many = False)
    return Response(serializer.data)

#This function is for udating a note.
@api_view(["PUT"])
def udpdateNote(request , pk):
    data = request.data
    note = Note.objects.get(id=pk)
    serializer = NoteSerializer(instance=note , data=data)
#Validating the data, if the data is valid then save it.
    if serializer.is_valid():
      serializer.save()

#This function is for deleting the data.
@api_view(["DELETE"])
def deleteNote(request , pk):
    note = Note.objects.get(id = pk)
    note.delete()

#This function is for creating a new note.
@api_view(['POST'])
def createNote(response):
    data = response.data
    note = Note.objects.create(
        name = data['name'],
        body = data['body']
    )
    serializer = NoteSerializer(note , many =False)
    return Response(serializer.data)
