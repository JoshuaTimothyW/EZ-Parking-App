from django import forms

class Register(forms.Form):
    name = forms.CharField(min_length=5,max_length=50)
    email = forms.CharField(max_length=50)
    