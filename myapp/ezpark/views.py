from django.shortcuts import render, HttpResponse as response, HttpResponseRedirect as redirect
from django.contrib.auth.hashers import make_password, check_password
from ezpark.models import User

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

    if request.session.get("id") == None:
        return redirect("/login/")

    return render(request,"park.html")

# Hello Page
def hello(request):
    text = '<h1>welcome to my app!</h1>'
    return response(text)

def addUser(request):

    new_user = User(
        name=request.POST["name"],
        email=request.POST["email"],
        phone=request.POST["phone"],
        password=make_password(request.POST["pass"]),
    )

    new_user.save()
    
    return response("new user added!")

def loginUser(request):

    get_user = User.objects.filter(email=request.POST["email"])

    if(not get_user.exists()):
        return render(request,"login.html",{"err_msg":"This email is not registered yet"})
    else:

        if check_password(request.POST["pass"],get_user[0].password):
            request.session["id"] = get_user[0].id
            return render(request,"park.html",{"curr_user":get_user[0]})

    # return response(get_user.count())
    return render(request,"login.html",{"err_msg":"Wrong email or password"})

def logout(request):
    try:
        del request.session['id']
    except:
        pass
        
    return redirect("/login/")
    
