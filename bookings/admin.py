from django.contrib import admin
from .models import Booking, Person, Ferry

class PersonAdminInline(admin.TabularInline):
    model = Person

class FerryAdminInline(admin.TabularInline):
    model = Ferry

class BookingAdmin(admin.ModelAdmin):
    inlines = (PersonAdminInline, FerryAdminInline, )

admin.site.register(Booking, BookingAdmin)