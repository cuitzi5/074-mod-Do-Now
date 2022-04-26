


$("button").click(function() {
    let name = $(".question1").val();
    let faveMovie = $(".question2").val();
    let times = $(".question3").val();
    //Write code below!
    let total=4*times;
    $(".prediction").append(name + " your favorite tiktok is " + faveMovie+ " you will see it "+ total);

});