# Generated by Django 2.2.9 on 2020-05-17 09:29

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='HomeImages',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image_location', models.CharField(max_length=100)),
                ('home_type', models.CharField(max_length=100)),
                ('room', models.CharField(blank=True, max_length=100)),
            ],
        ),
    ]
