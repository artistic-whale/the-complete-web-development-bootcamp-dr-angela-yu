'use strict'


let audio = new Audio("sounds/tom-1.mp3");
audio.play();


for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        // alert('I got clicked');
        audio.play();

        if (this.innerHTML === 'w') {
            audio.play("sounds/tom-1.mp3");
            document.getElementsByClassName("w")[0].style.color = "white";
        }

    })
}