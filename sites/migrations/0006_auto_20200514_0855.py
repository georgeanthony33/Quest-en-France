# Generated by Django 2.2.9 on 2020-05-14 08:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sites', '0005_review_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='review',
            name='text',
            field=models.TextField(max_length=1000),
        ),
    ]
