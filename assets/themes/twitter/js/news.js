function listNews()
    {
    $.getJSON('data/news/news.json', function(data) {
    	
    	 $.each(data['news'], function(key, val) {
	    	
	        var template = $('#newsListingTemplate').html();
	        var html = Mustache.to_html(template, val);
	        $('#newsList').append(html);
	        
	        });
        
        });
        
    }    
     