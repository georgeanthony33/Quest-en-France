from decouple import config
from .base import *

DEBUG = True

SECRET_KEY = config('SECRET_KEY_DEVELOPMENT')