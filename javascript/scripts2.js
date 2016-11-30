var numOfClicks = 0;

$(".button").mouseenter(function() {
    // do stuff...
    numOfClicks++;
    console.log(numOfClicks);
    $("body").append("YOU CLICKED");
    $("mark").html(numOfClicks);
    $("body").toggleClass("lime");
    
});
