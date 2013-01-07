//Show all events
function showEventsByCity(datasource)
    {
	        	
    $.getJSON(datasource, function(eventdata) {
    	
        $.each(eventdata['events'], function(key2, val2) {
        	  
	        var template = $('#eventListingItemTemplate').html();
	        var html = Mustache.to_html(template, val2);
	        $('#eventList').append(html);  
	        
          }); 
         
        });
 
    }       
   
// get detail by City  
function getEvent(url,city)
    {
	filename = city.replace(" ","-");
	filename = filename.toLowerCase();
	filename = 'data/events/'+ filename + ".json";    	
    	
    $.getJSON(filename, function(data) {
        $.each(data['events'], function(key, val) {
            if(url==val['url']){
                var template = $('#eventyDetailTemplate').html();
                var html = Mustache.to_html(template, val);
                $('#EventDetail').html(html);
                pHTML = document.getElementById('about').innerHTML;  
            }
          });                            
        });
    }       
     
function getEvent2(url)
    {
	filename = 'data/events/data.json';    	
    	
    $.getJSON(filename, function(data) {
        $.each(data['events'], function(key, val) {
            if(url==val['url']){
                var template = $('#eventyDetailTemplate').html();
                var html = Mustache.to_html(template, val);
                $('#EventDetail').html(html);
                pHTML = document.getElementById('about').innerHTML;  
            }
          });                            
        });
    }  
