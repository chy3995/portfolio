$("#exit").click(function(e){
    $(".continentPop").hide();
})
$("#contents a").click(function(e){
    $("#title").text(e.target.text);
    $(".continentPop").show();
})