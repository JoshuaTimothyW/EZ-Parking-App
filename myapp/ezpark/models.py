from django.db import models

# Create your models here.

class User(models.Model):

    name = models.CharField(max_length = 50)
    email = models.CharField(max_length = 50)
    phone = models.IntegerField()
    password = models.CharField(max_length = 50,default='')
    
    class Meta:
        db_table = "account"
     