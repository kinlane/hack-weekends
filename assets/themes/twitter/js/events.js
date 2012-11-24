

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


var date_sort_asc = function (date1, date2) {
  // This is a comparison function that will result in dates being sorted in
  // ASCENDING order. As you can see, JavaScript's native comparison operators
  // can be used to compare dates. This was news to me.
  if (date1 > date2) return 1;
  if (date1 < date2) return -1;
  return 0;
};

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
	          	       	
          		alert(totalcities + ":" + citycount);
          		//alert(allEvents.length);
          		
				allEvents.sort(function callbackFunc(a,b){return (a.name < b.name) ? -1 : 1;});          	
          		
          		for (i=0;i<allEvents.length;i++)
          			{
          			//alert("2:"+dodump(results[i]));
          			
			        var template = $('#eventListingItemTemplate').html();
			        var html = Mustache.to_html(template, allEvents[i]);
			        //alert(html);
			        //$('#eventList').append(html);          			
          			
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
    