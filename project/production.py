from .base import *

DEBUG = False

SECRET_KEY = config('SECRET_KEY_PRODUCTION')

ALLOWED_HOSTS = ['https://git.heroku.com/quest-en-france.git', ]