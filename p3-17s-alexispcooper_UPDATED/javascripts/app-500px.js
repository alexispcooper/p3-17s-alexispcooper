var evntHandler = function(){

    var prefixURL = "https://api.500px.com/v1/photos/search?term=";
    var suffixURL = "&consumer_key=ijBYJ0GFMQYlfyDZvsD1jOZLBPKdhXGnr72UcPsi";
    var flickrTag = $("input").val();
    var requestURL = prefixURL + flickrTag + suffixURL;
    console.log(requestURL);

    //clear old photos
    $(".photos").html("");

    $.getJSON(requestURL, function(flickrResponse) {
        console.log(flickrResponse);
        flickrResponse.photos.forEach(function (photo) {
            var $img = $("<img>").hide();
            $img.attr("src", photo.image_url);
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
