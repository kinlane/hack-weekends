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
        	     	
        	if(val['eventcount']>1)
	        	{
		        var template = $('#cityListingItemTemplate').html();
		        var html = Mustache.to_html(template, val);
		        //alert(html);
		        $('#cloudUS').append(html);     
		        citycount++;		        	
	        	}	        	       	
          });           
            
        }); 
        
        
    usCities = $('#cloudUS').html();
	alert(usCities);
	}
     