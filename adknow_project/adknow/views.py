from django.shortcuts import render


def index(request):
    return render(request, 'adknow/index.html')


def conversation(request):
    return render(request, 'adknow/conversation.html')


def about_us(request):
    return render(request, 'adknow/about_us.html')