---
title : assignments
layout: default
---

{% assign assignments = site.assignments | sort: 'title' %}
<ul>
{% for assignment in assignments %}
	{% if assignment.title != 'assignments' %}
		<li>
			<a href="{{site.baseurl}}{{assignment.url}}">{{assignment.title | upcase}}</a>
		</li>
	{% endif %}
{% endfor %}
</ul>