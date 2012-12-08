function listNews()
    {
    $.getJSON('data/news/news.json', function(data) {
        var template = $('#newsListingTemplate').html();
        var html = Mustache.to_html(template, data);
        $('#newsList').html(html);
        });
    }    
     