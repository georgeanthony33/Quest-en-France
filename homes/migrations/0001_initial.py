# Generated by Django 2.2.9 on 2020-04-02 22:53

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Home',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('plot', models.SmallIntegerField()),
                ('home_type', models.CharField(max_length=50)),
                ('bedrooms', models.SmallIntegerField()),
                ('image', models.CharField(max_length=200)),
                ('veranda', models.CharField(max_length=50)),
                ('fridge_freezer', models.CharField(max_length=50)),
                ('gas_tails', models.CharField(max_length=50)),
                ('tow_bars', models.CharField(max_length=50)),
                ('pull_out_bed', models.CharField(max_length=50)),
            ],
        ),
    ]
