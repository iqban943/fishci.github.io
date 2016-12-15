var score = 0;
var visitedpages = 0;
$(".hover").mouseenter(function(){
    if ($(this).hasClass("scored")) {
        
    } else {
        $(".count").show();
        $(this).addClass("scored");
        score++;
        $(".countval").html(score);
    }
})

$(".hover").click(function(){
    if ($(this).hasClass("visited")) {
        
    } else {
        console.log("test");
        $(this).addClass("visited");
        visitedpages++;
        score = score + 10;
        $(".countval").html(score);
    }
})