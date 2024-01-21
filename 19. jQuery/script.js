// $("h1").css("color", "white");
// not best-practice!

$("h1").addClass("big-title margin-50");
$("h1").text("Bye");

$("button").click(function() {
    $("h1").html("<b>Bye Again</b>")
});


// one way to use event listeners
$(document).keydown(function(event) {
    $("h1").text(event.key);
});


// another way to use event listeners
$("h1").on("mouseover", function() {
    $("h1").css("color", "red");
});