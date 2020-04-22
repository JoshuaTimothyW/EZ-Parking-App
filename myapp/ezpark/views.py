from django.shortcuts import render, HttpResponse as response, HttpResponseRedirect as redirect
from ezpark.models import User
import bcrypt, json

# Create your views here.

# Dashboard Page
def dashboard(request):
    # list_arr = ["apple","orange","pear"]
    list_user = User.objects.all()

    return render(request,"test.html",{"list_arr":list_user})

# Register Page
def register(request):

    return render(request,"register.html")

# Login Page
def login(request):
    return render(request,"login.html",{"err_msg":""})

# Parking Page
def park(request):

    return render(request,"park.html")

# Hello Page
def hello(request):
    text = '<h1>welcome to my app!</h1>'
    return response(text)

def addUser(request):

    salt = bcrypt.gensalt()
    new_pass = request.POST["pass"].encode('utf-8')
    hashed = bcrypt.hashpw(new_pass,salt)

    new_user = User(
        name=request.POST["name"],
        email=request.POST["email"],
        phone=request.POST["phone"],
        password=hashed,
    )

    new_user.save()
    
    return response("new user added!")

def loginUser(request):

    get_user = User.objects.filter(email=request.POST["email"])

    if(not get_user.exists()):
        return render(request,"login.html",{"err_msg":"This email is not registered yet"})
    else:
        salt = bcrypt.gensalt()
        new_pass = request.POST["pass"].encode('utf-8')
        hashed = bcrypt.hashpw(new_pass,salt)

        if (hashed,get_user[0].password):
            request.session["id"] = get_user[0].id
            return render(request,"park.html",{"curr_user":get_user[0]})

    # return response(get_user.count())
    return render(request,"login.html",{"err_msg":"wrong email or password"})

def logout(request):
    try:
        del request.session['id']
    except expression as identifier:
        pass
    return response("you are logout")
    
