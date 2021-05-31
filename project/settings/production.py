from .base import *
from decouple import config

DEBUG = False

SECRET_KEY = config('SECRET_KEY_PRODUCTION')

# ALLOWED_HOSTS = ['https://quest-en-france.herokuapp.com/', ]