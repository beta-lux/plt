from django.shortcuts import render
from django.contrib.auth.mixins import LoginRequiredMixin
from django.views import View
from django import forms

from env.environ import team_choices
from utils.mysql import sqli_db, raw_query


class SqlQueryForm(forms.Form):
    query = forms.CharField()
    team = forms.ChoiceField(choices=team_choices())


class SqliView(LoginRequiredMixin, View):
    def get(self, request):
        form = SqlQueryForm()
        return render(request, 'sql/sqli.html', {
            'form': form
        })

    def post(self, request):
        form = SqlQueryForm(request.POST)

        if not form.is_valid():
            return render(request, 'sql/sqli.html', {
                'form': form
            })

        db = sqli_db()
        raw_query(db, form.cleaned_data['query'])

        return render(request, 'sql/sqli.html', {})
