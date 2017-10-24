$(document).ready(function(){
    console.log("DOM loaded - you can play");

    var span = $("span");
    span.each(function(index, element){
        if(index%2 == 0) {
            $(element).css("color", "red");
        };
    });

    var paragraphs = $('p');
    paragraphs.each(function(index, element){
        var button = '<button class="btn btn-success btn-lg" data-tmp="' + "My index number is "+ index + "."+'">Click me</button>';
        $(element).append('<br>' + button)
    });

    $("button").click(function(){
        alert($(this).attr("data-tmp"));
    });
});
