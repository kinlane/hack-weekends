---
layout: page
title: Hack Weekends Blog
description: Join the hackathon movement.
---
{% include JB/setup %}

<h1>Hack Weekends Blog</h1>
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