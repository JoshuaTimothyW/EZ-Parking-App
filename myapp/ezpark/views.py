from django.shortcuts import render, HttpResponse as response, redirect
from django.contrib.auth.hashers import make_password, check_password
from ezpark.models import User, Mall, BookList
import pyqrcode, json

# Validating User
def has_session(request):
    
    if request.session.get("id") == None and request.method == "GET":
        return False

    return True

# Generate QR
def generate_qr(obj):

    url = pyqrcode.create(obj)
    url.png('url.png', scale=8)

###########################################################


# Main Page
def index(request):
    return render(request,"index.html")


# Register Page
def register(request):

    return render(request,"register.html")


# Login Page
def login(request,):
    return render(request,"login.html",{"err_msg":""})


# Parking Page
def park(request,location,floor):
    real_location = location.replace("-"," ").title()

    max_slot = Mall.objects.filter(name=real_location,floor=floor)

    # list_booked_slot = BookList.objects.filter(location=real_location,floor=floor)

    return response(max_slot.count())

    # obj = {
    #     "list_booked":list_booked_slot,
    #     ""
    # }

    # return render(request,"park.html",obj)



# Dashboard Page
def dashboard(request):
    
    if(request.session.get("id") != None):
        return render(request,"dashboard.html")
    else:
        redirect("/")


# After Submit Register
def add_user(request):

    new_user = User(
        name=request.POST["name"],
        email=request.POST["email"],
        phone=request.POST["phone"],
        password=make_password(request.POST["pass"]),
    )

    new_user.save()
    
    get_user = User.objects.filter(email=request.POST["email"])
    request.session["id"] = get_user[0].id
    return redirect("/dashboard/")



# After Submit Login
def loginUser(request):

    get_user = User.objects.filter(email=request.POST["email"])

    if(not get_user.exists()):
        return render(request,"login.html",{"err_msg":"This email is not registered yet"})
    else:

        if check_password(request.POST["pass"],get_user[0].password):
            request.session["id"] = get_user[0].id
            return redirect("/dashboard/")
            # return render(request,"dashboard.html",{"curr_user":get_user})
        else:
            return render(request,"login.html",{"err_msg":"Wrong email or password"})



# After logout
def logout(request):
    try:
        del request.session['id']
    except:
        pass
        
    return redirect("/")
