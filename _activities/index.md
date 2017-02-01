---
title : activities
layout: default
---

{% assign activities = site.activities | sort: 'title' %}
<ul>
{% for activity in activities %}
	{% if activity.title != 'activities' %}
		<li>
			<a href="{{site.baseurl}}{{activity.url}}">{{activity.title | upcase}}</a>
		</li>
	{% endif %}
{% endfor %}
</ul>