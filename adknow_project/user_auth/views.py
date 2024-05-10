from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout 
from .forms import SignupForm, LoginForm

def index(request):
    return render(request, 'user_auth/index.html')

# signup page
def user_signup(request):
    if request.method == 'POST':
        form = SignupForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('registration:login')
    else:
        form = SignupForm()
    return render(request, 'user_auth/signup.html', {'form': form})

# login page
def user_login(request):
    account_exist = True
    if request.method == 'POST':
        form = LoginForm(request.POST)
        if form.is_valid():
            username = form.cleaned_data['username']
            password = form.cleaned_data['password']
            user = authenticate(request, username=username, password=password)
            if user:
                login(request, user)    
                return redirect('home:index')
            else:
                account_exist = False
    else:
        form = LoginForm()
    return render(
        request, 
        'user_auth/login.html', 
        {
            'form': form, 
            'account_exist': account_exist,
        }
    )

# logout page
def user_logout(request):
    logout(request)
    return redirect('home:index')