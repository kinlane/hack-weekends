function showCities()
    {
    citycount = 0;
    eventcount = 0;	
    var allEvents = new Array();
	
    $.getJSON('data/events/cities.json', function(data) {
    	
    	allcities = data['cities'];
    	totalcities = allcities.length;
    	
        $.each(data['cities'], function(key, val) {
        	
        	city = val['city'];
        	     	
        	if(val['eventcount']>25)
	        	{
		        var template = $('#cityListingItemTemplate').html();
		        var html = Mustache.to_html(template, val);
		        $('#tier1').append(html);     
		        citycount++;		        	
	        	}	
        	if(val['eventcount']>10&&val['eventcount']<25)
	        	{
		        var template = $('#cityListingItemTemplate').html();
		        var html = Mustache.to_html(template, val);
		        $('#tier2').append(html);     
		        citycount++;		        	
	        	}
        	if(val['eventcount']<10)
	        	{
		        var template = $('#cityListingItemTemplate').html();
		        var html = Mustache.to_html(template, val);
		        $('#tier3').append(html);     
		        citycount++;		        	
	        	}	        		        	        	       	
          });           
            
        }); 
 
	}
	