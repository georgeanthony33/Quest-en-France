# Generated by Django 2.2.9 on 2020-04-07 17:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('jwt_auth', '0003_auto_20200406_1640'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='second_name',
        ),
        migrations.AlterField(
            model_name='user',
            name='last_name',
            field=models.CharField(max_length=100),
        ),
    ]
