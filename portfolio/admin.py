
from .models import ContactMessage
from .models import HireRequest
from django.contrib import admin
from .models import HireRequest
from .models import Project


# Register only ContactMessage
admin.site.register(ContactMessage)
# Register only Project
admin.site.register(Project)
    

@admin.register(HireRequest)
class HireRequestAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'number', 'question', 'submitted_at')
    list_filter = ('submitted_at',)
    search_fields = ('name', 'email', 'number')

