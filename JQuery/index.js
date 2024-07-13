$("h1").addClass("big margin");

$("button").html("<em>Hye</em>");

$("a").attr("href","https://yahoo.com");

$("button").click(function(){
    $("h1").fadeOut().fadeIn().animate({margin:"10%"});
});

$(document).keypress(function(event){
    $("h1").text(event.key);
});

$("h1").on("mouseover",function(){
    $("h1").css("color","pink");
});

$("button").click(function(){
    $("a").slideToggle();
});