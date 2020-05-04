from django.contrib import admin
from .models import Home
from bookings.models import Booking

class BookingAdminInLine(admin.TabularInline):
    model = Booking

class HomeAdmin(admin.ModelAdmin):
    inlines = (BookingAdminInLine, )

admin.site.register(Home, HomeAdmin)