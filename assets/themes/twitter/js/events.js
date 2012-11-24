
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
    var allEvents = new Array();
	
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
					        var template = $('#eventListingItemTemplate').html();
					        var html = Mustache.to_html(template, val2);
					        //alert(html);
					        $('#eventList').append(html);  
			        		}
			          }); 
			          
			        });
			               		        	
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

function sorttable()
{
  //Get all the rows of employee grid
    var rows = $('#eventList tr');

    //Start sorting column along with data
    rows.eq(0).find('th').sort(function(a, b) {

        return $.text([a]) > $.text([b]) ? 1 : -1;

    }).each(function(new_Index) {

        //Original Index
        var original_Index = $(this).index();

        //Reorder Header Text
        rows.each(function() {
            var th = $(this).find('th');
            if (original_Index !== new_Index)
                th.eq(original_Index).insertAfter(th.eq(new_Index));
        });
        
        //Reorder Column Data
        rows.each(function() {
            var td = $(this).find('td');
            if (original_Index !== new_Index)
                td.eq(original_Index).insertAfter(td.eq(new_Index));
        });

    });	
}
