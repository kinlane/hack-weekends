

function associativeSort(givenArray, keyToSort) {
    var results = [];

    var temp = [];
    for(var key in givenArray) {
        temp.push(givenArray[key].name);
    }
    temp = temp.sort();
    for(var x = 0; x < temp.length; x++) {
        results[x] = givenArray[temp[x]];
    }

    return results;
}


function showEvents()
    {
   // alert("firing!");	
    $.getJSON('data/events/san-francisco.json', function(data) {
	//alert('in');
        $.each(data['events'], function(key, val) {
        	startDate = val['start_date'];     	
        	startDate = new Date(startDate);
        	endDate = new Date();
        	alert(startDate);
        	if(startDate > endDate)
        		{
        		alert("in!");	
        		}
          }); 
        });
    }   
    
function showEventsByCity()
    {
    citycount = 0;
    eventcount = 0;	
    allEvents = new Array();
	
    $.getJSON('data/events/cities.json', function(data) {
    	allcities = data['cities'];
    	totalcities = allcities.length;
        $.each(data['cities'], function(key, val) {
        	
        	city = val['city'];
        	     	
        	if(val['eventcount']>0)
	        	{
	        		
	        	filename = city.replace(" ","-");	
	        	filename = filename.toLowerCase();
	        	filename = 'data/events/'+ filename + ".json";
	        	
			    $.getJSON(filename, function(eventdata) {
			    	
			        $.each(eventdata['events'], function(key2, val2) {
			        	  
			        	startDate = new Date(val2['start_date']);
			        	endDate = new Date();

			        	if(startDate > endDate)
			        		{
			        	
					        //var template = $('#eventListingItemTemplate').html();
					        //var html = Mustache.to_html(template, val2);
					        //$('#eventList').append(html);
					       //alert(dodump(val2,5));
					        aEvent = { "name":val2['name'], "start_date": val2['start_date'], "display_start_date": val2['display_start_date'], "city": val2['city'], "country": val2['country']};
					        //alert("1:"+dodump(aEvent));
					        var doit = allEvents.push(aEvent);	
			        		}
			          }); 
			          
			        });
			               		        	
	        	}
	        	
          		citycount++; 
	          	if(totalcities==citycount){
	          	
	          	//associativeSort(allEvents,'name');
	          	
			 	var temp = [];
			    for(var key in allEvents) {
			        temp.push(allEvents[key].name);
			    }
			    temp = temp.sort();
			    for(var x = 0; x < temp.length; x++) {
			        results[x] = allEvents[temp[x]];
			    }	          	
	          	
          		alert(totalcities + ":" + citycount);
          		//alert(allEvents.length);
          		for (i=0;i<results.length;i++)
          			{
          			//alert("2:"+dodump(allEvents[i]));
          			
			        var template = $('#eventListingItemTemplate').html();
			        var html = Mustache.to_html(template, results[i]);
			        alert(html);
			        $('#eventList').append(html);          			
          			
          			}
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
    