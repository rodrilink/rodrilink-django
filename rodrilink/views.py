from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'index.html')

def resume(request):
    return render(request, 'resume.html')

def contacts(request):
    return render(request, 'contacts.html')

def feedback(request):
    return render(request, 'feedback.html')

def blog(request):
    return render(request, 'blog-3-col.html')

def portfolio(request):
    return render(request, 'portfolio-4-col.html')
