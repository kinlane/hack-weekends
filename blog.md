---
layout: page
title: Working Site
description: This is a sample website built with Jekyll + Mustache, hosted on Github.
---
{% include JB/setup %}

<h1>Blog</h1>
<br />
<ul class="entries">
{% for post in site.posts %}
	<li>
		<a href="/WorkingPages/{{ post.url }}">
			{{ post.title }}
		</a>
	</li>
{% endfor %}
</ul>