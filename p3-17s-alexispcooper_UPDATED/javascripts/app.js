var evntHandler = function(){

    var prefixURL = "https://api.500px.com/v1/photos/search?term=";
    var suffixURL = "&consumer_key=ijBYJ0GFMQYlfyDZvsD1jOZLBPKdhXGnr72UcPsi";
    var flickrTag = $("input").val();
    var requestURL = prefixURL + flickrTag + suffixURL;

    //clear old photos
    $(".photos").html("");

    $.getJSON(requestURL, function(flickrResponse) {
        console.log(flickrResponse);
        flickrResponse.items.forEach(function (item) {
            var $img = $("<img>").hide();
            $img.attr("src", item.media.m);
            $("main .photos").append($img);
            $img.fadeIn();
        });
    });
};


$("button").on("click", evntHandler);

$("input").on("keypress", function (event) {
    if (event.keyCode === 13) {
        //???;
    }
});
