function listHackathons()
    {
    $.getJSON('data/directory.json', function(data) {
        var template = $('#directoryListingTemplate').html();
        var html = Mustache.to_html(template, data);
        $('#employeeList').html(html);
        });
    }    
     
     
function getHackathon(id)
    {
    $.getJSON('data/directory.json', function(data) {
        $.each(data['directory'], function(key, val) {
            if(id==val['id']){
                var template = $('#directoryDetailTemplate').html();
                var html = Mustache.to_html(template, val);
                $('#DirectoryDetail').html(html);                            
            }
          });                            
        });
    }  