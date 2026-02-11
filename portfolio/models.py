from django.db import models


class Profile(models.Model):
    full_name = models.CharField(max_length=100)
    title = models.CharField(max_length=150)
    location = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    objective = models.TextField()
    profile_image = models.ImageField(upload_to='profile/', blank=True, null=True)

    def __str__(self):
        return self.full_name


class Skill(models.Model):
    CATEGORY_CHOICES = [
        ('Programming', 'Programming'),
        ('Framework', 'Framework'),
        ('Database', 'Database'),
        ('Networking', 'Networking'),
        ('IT Support', 'IT Support'),
        ('Soft Skill', 'Soft Skill'),
    ]

    name = models.CharField(max_length=100)
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES)
    short_desc = models.CharField(max_length=80, blank=True)  # optional for brief view
    description = models.TextField(blank=True)  # longer description if needed
    icon_url = models.URLField(max_length=500, blank=True)

    def __str__(self):
        return self.name


class SoftSkill(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField()
    icon_url = models.URLField(blank=True)

    def __str__(self):
        return self.name


class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    technologies = models.CharField(max_length=200)
    project_type = models.CharField(max_length=100)

    def __str__(self):
        return self.title


class ContactMessage(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)


class ContactSubmission(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)  # timestamp ng submission

    def __str__(self):
        return f"{self.name} - {self.created_at.strftime('%Y-%m-%d')}"


class HireRequest(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    number = models.CharField(max_length=20)
    question = models.TextField(blank=True)
    submitted_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} ({self.email})"




class Project(models.Model):
    title = models.CharField(max_length=200)
    subtitle = models.CharField(max_length=200, blank=True)
    description = models.TextField(blank=True)
    image = models.ImageField(upload_to='projects/', blank=True)
    source_url = models.URLField(blank=True)
    view_url = models.URLField(blank=True)
    # Para sa modal
    overview = models.TextField(blank=True)
    features = models.JSONField(default=list, blank=True)   # list of features
    languages = models.JSONField(default=list, blank=True)  # list of languages
    tools = models.JSONField(default=list, blank=True)      # list of tools
    journey = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
