function showEvents()
    {
    //alert("firing!");	
    $.getJSON('data/events/san-francisco.json', function(data) {

        $.each(data['events'], function(key, val) {
			if ( new Date(val['start_date']) > new Date() )
			{
					
	        var template = $('#eventListingTemplate').html();
	        var html = Mustache.to_html(template, data);
	        //alert(html);
	        $('#eventList').html(html);
	                          
            }
          }); 
        });
    }    
     
     
function getEvent(id)
    {
    $.getJSON('data/events/san-francisco.json', function(data) {
        $.each(data['events'], function(key, val) {
            if(id==val['id']){
                var template = $('#directoryDetailTemplate').html();
                var html = Mustache.to_html(template, val);
                $('#DirectoryDetail').html(html);                            
            }
          });                            
        });
    }  
    
function showCities()
    {
    alert("firing!");	
    $.getJSON('data/events/san-francisco.json', function(data) {
    	//alert(dodump(data,5));
        var template = $('#eventListingTemplate').html();
        var html = Mustache.to_html(template, data);
        //alert(html);
        $('#eventList').html(html);
        });
    }   
    
function showCountries()
    {
    alert("firing!");	
    $.getJSON('data/events/san-francisco.json', function(data) {
    	//alert(dodump(data,5));
        var template = $('#eventListingTemplate').html();
        var html = Mustache.to_html(template, data);
        //alert(html);
        $('#eventList').html(html);
        });
    }   