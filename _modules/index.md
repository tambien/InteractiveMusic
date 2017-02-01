---
title : modules
layout: default
---

{% assign modules = site.modules | sort: 'title' %}
<ul>
{% for module in modules %}
	{% if module.title != 'modules' %}
		<li>
			<a href="{{site.baseurl}}{{module.url}}">{{module.title | upcase}}</a>
		</li>
	{% endif %}
{% endfor %}
</ul>