from django.db import models
import uuid

# Create your models here.

class User(models.Model):
    id = models.CharField(max_length=100,primary_key=True,unique=True,default=uuid.uuid4)
    name = models.CharField(max_length = 50)
    email = models.CharField(max_length = 50)
    phone = models.IntegerField()
    password = models.CharField(max_length = 50,default='')
    
    class Meta:
        db_table = "account"

class BookList(models.Model):
    location = models.CharField(max_length=50)
    floor = models.IntegerField()
    slot = models.IntegerField()
    transaction_id = models.CharField(max_length=100) 

    class Meta:
        db_table = "booking_list"

class Transaction(models.Model):
    id = models.CharField(max_length=100,primary_key=True,unique=True,default=uuid.uuid4)
    user_id = models.CharField(max_length=100)
    license_plate = models.CharField(max_length=50,default='')
    price = models.IntegerField()
    datetime = models.DateField(auto_now=True)

    class Meta:
        db_table = "transaction"

class Mall(models.Model):
    name = models.CharField(max_length=50)
    floor = models.IntegerField()
    slot = models.IntegerField()

    class Meta:
        db_table = "ezpark_mall"