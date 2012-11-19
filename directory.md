--- 
layout: page
title: Working Site
description: This is a sample website built with Jekyll + Mustache, hosted on Github.
---
	 
{% literal %}
<script id="directoryListingTemplate" type="text/template">
	<ul>
	{{#directory}}
	<li><a href="directory-view?id={{id}} ">{{firstName}} {{lastName}}</a> - {{email}}</li>
	{{/directory}}
	</ul>
</script>
{% endliteral %}

<h1>Directory</h1>
<p>This directory listing is being driven from a <a href="https://github.com/kinlane/WorkingPages/blob/gh-pages/data/directory.json" target="_blank">JSON file hosted in this Github repository</a>.</p>
<p>It can easily be edited using online <a href="http://jsoneditoronline.org/" target="_blank">JSON editor</a> or Google Spreadsheet (Coming Soon).</p>

<div id="employeeList"></div>  

<p>Using a JSON file as the datasource of this directory, allows me to host at Github, display using Mustache, and potentially collaborate with other users in the curation of the directory data.</p>

<script type="text/javascript">
listDirectory();
</script>
