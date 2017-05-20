var evntHandler = function(){

    var prefixURL = "???";
    var suffixURL = "???";
    var flickrTag = $("input").???();
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