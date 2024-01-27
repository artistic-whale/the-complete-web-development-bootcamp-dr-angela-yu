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


// 157. Adding and Removing Elements with jQuery
$("h1").before("<button>New before button</button>");
$("h1").after("<button>New after button</button>");
$("h1").prepend("<button>New prepend button</button>");
$("h1").append("<button>New append button</button>");


// 158. Website Animations with jQuery
$("button").on("click", function () {
    // $("h1").hide();
})

$("button").on("click", function () {
    // $("h1").show();
    $("h1").toggle();
})

/*
You can also use methods like:
.fadeOut()
.fadeIn()
.fadeToggle()
.slideUp()
.slideDown()
.slideToggle()

$("h1").slideUp().slideDown().animate({opactiy: 0.5});
*/