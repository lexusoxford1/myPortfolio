from django.shortcuts import render, get_object_or_404, redirect
from .models import HireRequest
from django.conf import settings
from django.shortcuts import redirect
from django.contrib import messages
from .models import Skill, SoftSkill

from .models import (
    Profile,
    Skill,
    Project,
    ContactMessage,
    HireRequest
)


# HOME PAGE
def home(request):
    profile = Profile.objects.first()
    """
    This view renders the homepage of the portfolio.

    It fetches the following data from the database:

    - The first profile object
    - All project objects
    - A list of hard-coded technical skills with their
      respective icons
    - A list of soft skills with their respective icons

    The technical skills are calculated with an angle of 22.5
    degrees apart from each other.

    The view renders the 'portfolio/home.html' template with the
    fetched data.

    :param request: The HTTP request object
    :return: A rendered HTML page based on the 'portfolio/home.html' template
    """
    projects = Project.objects.all()
    soft_skills = SoftSkill.objects.all()

    # Hardcoded online icons for Technical Skills
# HOME PAGE
def home(request):
    profile = Profile.objects.first()
    projects = Project.objects.all()

    # Hardcoded Technical Skills with category
    tech_skills = [
        {"name": "C#", "short_desc": "Programming Language", "icon_url": "https://cdn-icons-png.flaticon.com/512/6132/6132221.png", "category": "Back-end Programming"},
        {"name": "Java", "short_desc": "Programming Language", "icon_url": "https://cdn-icons-png.flaticon.com/512/226/226777.png", "category": "Back-end Programming"},
        {"name": "Python", "short_desc": "Programming Language", "icon_url": "https://cdn-icons-png.flaticon.com/512/1822/1822899.png", "category": "Back-end Programming"},
        {"name": "PHP", "short_desc": "Programming Language", "icon_url": "https://cdn-icons-png.flaticon.com/512/919/919830.png", "category": "Back-end Programming"},
        {"name": "JavaScript", "short_desc": "Programming Language", "icon_url": "https://cdn-icons-png.flaticon.com/512/5968/5968292.png", "category": "Back-end Programming"},
        {"name": "C++", "short_desc": "Programming Language", "icon_url": "https://cdn-icons-png.flaticon.com/512/6132/6132222.png", "category": "Back-end Programming"},

        {"name": "SQL Server", "short_desc": "Database", "icon_url": "https://img.icons8.com/?size=100&id=IWv649ue3CIf&format=png&color=000000", "category": "Database"},
        {"name": "MySQL", "short_desc": "Database", "icon_url": "https://cdn-icons-png.flaticon.com/512/5968/5968313.png", "category": "Database"},

        {"name": ".NET MAUI", "short_desc": "Framework & Tool", "icon_url": "https://cdn.worldvectorlogo.com/logos/dot-net-core-7.svg", "category": "Application Development"},
        {"name": "Android Studio", "short_desc": "Framework & Tool", "icon_url": "https://cdn-icons-png.flaticon.com/512/226/226770.png", "category": "Application Development"},

        {"name": "HTML5", "short_desc": "Web & Mobile", "icon_url": "https://cdn-icons-png.flaticon.com/512/732/732212.png", "category": "Web Development"},
        {"name": "CSS3", "short_desc": "Web & Mobile", "icon_url": "https://cdn-icons-png.flaticon.com/512/732/732190.png", "category": "Web Development"},
        {"name": "Bootstrap", "short_desc": "Framework & Tool", "icon_url": "https://cdn-icons-png.flaticon.com/512/5968/5968672.png", "category": "Web Development"},
        {"name": "Tailwind CSS", "short_desc": "Framework & Tool", "icon_url": "https://img.icons8.com/?size=100&id=x7XMNGh2vdqA&format=png&color=000000", "category": "Web Development"},
        {"name": "ASP.NET Web API", "short_desc": "Framework & Tool", "icon_url": "https://cdn-icons-png.flaticon.com/512/732/732221.png", "category": "Web Development"},
        {"name": "RESTful APIs", "short_desc": "Web & Mobile", "icon_url": "https://img.icons8.com/?size=100&id=b3uCTpcS-NiY&format=png&color=000000", "category": "Web Development"},
        {"name": "Networking", "short_desc": "IT & Networking", "icon_url": "https://cdn-icons-png.flaticon.com/512/270/270798.png", "category": "Web Development"},

        {"name": "IT Support", "short_desc": "Technical Support", "icon_url": "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", "category": "Other Field"},
    ]

    # Map levels and percentages
    level_map = {
        "C#": ("Intermediate", 70),
        "Java": ("Beginner", 30),
        "Python": ("Average", 50),
        "PHP": ("Intermediate", 70),
        "JavaScript": ("Average", 50),
        "C++": ("Beginner", 30),
        ".NET MAUI": ("Average", 50),
        "ASP.NET Web API": ("Average", 50),
        "Android Studio": ("Beginner", 30),
        "Bootstrap": ("Average", 50),
        "Tailwind CSS": ("Average", 50),
        "HTML5": ("Advanced", 90),
        "CSS3": ("Average", 50),
        "RESTful APIs": ("Beginner", 30),
        "SQL Server": ("Intermediate", 70),
        "MySQL": ("Intermediate", 70),
        "Networking": ("Beginner", 30),
        "IT Support": ("Beginner", 30),
    }

    for skill in tech_skills:
        level, percent = level_map.get(skill["name"], ("Average", 50))
        skill["level"] = level
        skill["percent"] = percent

    # Soft Skills
    soft_skills_list = [
        {"name": "Problem Solving", "short_desc": "Technical & logical problem-solving", "icon_url": "https://cdn-icons-png.flaticon.com/512/2910/2910762.png"},
        {"name": "Teamwork", "short_desc": "Teamwork and collaboration", "icon_url": "https://cdn-icons-png.flaticon.com/512/2910/2910760.png"},
        {"name": "Time Management", "short_desc": "Time management & adaptability", "icon_url": "https://cdn-icons-png.flaticon.com/512/2910/2910759.png"},
        {"name": "Initiative", "short_desc": "Willingness to learn & take initiative", "icon_url": "https://cdn-icons-png.flaticon.com/512/2910/2910765.png"},
    ]

    return render(request, 'portfolio/home.html', {
        'profile': profile,
        'projects': projects,
        'skills': tech_skills,
        'soft_skills': soft_skills_list,
    })




# PROJECT DETAIL
def project_detail(request, pk):
    project = get_object_or_404(Project, pk=pk)
    return render(request, 'portfolio/project_detail.html', {
        'project': project
    })


# CONTACT FORM
def contact(request):
    if request.method == 'POST':
        ContactMessage.objects.create(
            name=request.POST.get('name'),
            email=request.POST.get('email'),
            message=request.POST.get('message')
        )

        messages.success(request, "Message sent successfully!")
        return redirect('home')

    return render(request, 'portfolio/contact.html')


# HIRE ME FORM
def hire_me_submit(request):
    if request.method == 'POST':
        name = request.POST.get('name', '').strip()
        email = request.POST.get('email', '').strip()
        number = request.POST.get('number', '').strip()
        question = request.POST.get('question', '').strip()

        if not name or not email or not number:
            messages.error(request, "All fields are required.")
            return redirect('home')

        # Save to database → makikita sa admin
        HireRequest.objects.create(
            name=name,
            email=email,
            number=number,
            question=question
        )

        messages.success(request, "Your request has been submitted successfully!")
        return redirect('home')
    return redirect('home')