from django.urls import path
from . import views


urlpatterns = [
    path('' , views.getRoutes, name='routes'),
    path('notes/' , views.getNotes, name = 'notes'),
    path('notes/<pk>/update' , views.udpdateNote , name = 'update'),
    path('notes/create' , views.createNote , name = 'create'),
    path('notes/<pk>/delete' , views.deleteNote , name = 'delete'),
    path('notes/<pk>/' , views.getNote , name = 'note')
]


# These are the path for the server side.