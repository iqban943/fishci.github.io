for (var dots = 0; dots < 100; dots++){
$(".wrapper").append("<div class='circle'></div>")
}

var counter = 1;

var sizeVal = (Math.floor(Math.random()*1) + 5) + "px";

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

$(".twinkle").mouseenter(function() {
    $(".circle").css("background-color", "black");
});

$(".twinkle").mouseleave(function() {
    $(".circle").css("background-color", "white");
});

$(window).scroll(function() {
    console.log($(window).scrollTop());
    $(".sagan").css("opacity",$(window).scrollTop()/100);
    $(".circle").css("width",($(window).scrollTop()/10)+4);
    $(".circle").css("height",($(window).scrollTop()/10)+4);
});