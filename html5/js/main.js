for (var dots = 0; dots < 50; dots++){
$(".wrapper").append("<div class='circle'></div>")
}

var counter = 1;

var sizeVal = (Math.floor(Math.random()*20) + 40) + "px";

$(".circle").css("width", sizeVal).css("height", sizeVal);

$(".circle").each(function() {
    $(this).css("opacity",(counter/100));
    $(this).css("transform", "rotate("+(counter/100)*360 + "deg)");
    $(this).css("top",Math.floor(Math.random()*$(window).height()));
    $(this).css("left",Math.floor(Math.random()*$(window).width()));
    counter++;
});

$(window).resize(function() {
    $(".circle").each(function() {
    $(this).css("top",Math.floor(Math.random()*$(window).height()));
    $(this).css("left",Math.floor(Math.random()*$(window).width()));
    counter++;
    $(this).css("background-color", "gray");
    });
});

$(".circle").mouseenter(function() {
    $(".circle").css("background-color", "red");
});
$(".circle").mouseleave(function() {
    $(".circle").css("background-color", "white");
});
