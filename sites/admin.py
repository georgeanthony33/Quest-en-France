from django.contrib import admin
from .models import Site, Review, Attraction
from homes.models import Home

class HomeAdminInLine(admin.TabularInline):
    model = Home

class ReviewAdminInline(admin.TabularInline):
    model = Review

class AttractionAdminInline(admin.TabularInline):
    model = Attraction

class SiteAdmin(admin.ModelAdmin):
    inlines = (HomeAdminInLine, ReviewAdminInline, AttractionAdminInline, )

admin.site.register(Site, SiteAdmin)
admin.site.register(Attraction)
admin.site.register(Review)