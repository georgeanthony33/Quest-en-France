import django_heroku
from .base import *

DEBUG = False

SECRET_KEY = config('SECRET_KEY_PRODUCTION')

# ALLOWED_HOSTS = ['https://quest-en-france.herokuapp.com/', ]