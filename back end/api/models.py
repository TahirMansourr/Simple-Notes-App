from django.db import models

class Note(models.Model):
    name = models.CharField(max_length=100)
    body = models.TextField(max_length=1000, null=True, blank=True)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
    

# There is only a single model which contains the name , body , updated feild, and the created feild for the note.
