function listEvents()
    {
    $.getJSON('data/events/san-francisco.json', function(data) {
        var template = $('#eventListingTemplate').html();
        var html = Mustache.to_html(template, data);
        $('#eventList').html(html);
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