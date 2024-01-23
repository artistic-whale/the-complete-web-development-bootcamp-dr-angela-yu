"use strict"

let randomNumber = Math.floor(Math.random() * 4); 
let buttonColours = ["red", "blue", "green", "yellow"];
let randomChosenColour = buttonColours[randomNumber];
let gamePattern = [];
let userClickedPattern = [];



// of we slaan de geluiden apart op in variabelen
const soundOfBlueColour = "sounds/blue.mp3";
const soundOfGreenColour = "sounds/green.mp3";
const soundOfRedColour = "sounds/red.mp3";
const soundOfYellowColour = "sounds/yellow.mp3";
const soundOfWrongBox = "sounds/wrong.mp3" 
// hier kunnen we er de geluiden opslaan in een array
// om vervolgens per index het geluid op te halen voor de desbetreffende kleur
let sounds = [];


console.log(randomNumber);
console.log(randomChosenColour);
console.log(gamePattern);


function makeSoundsWhenColourSelected() {
    
    for (i = 0; i < sounds.length; i++) {
        let audio = new Audio(sounds[i]);
        
        if (sounds[i] === soundOfBlueColour) {
            audio.play();
        }
    }
}


/** Animation flash for the selected colour boxes */
function animationSelectedColours() {

    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);

}


/** Function to create a new sequence of sounds patterns */
function nextSequence() {  
    
    gamePattern.push(randomChosenColour);
    
}


/** Function to get the clicked button ID */
function getClickedButtonID() {

    $(".btn").click(function () {
        let id = this.id;
        console.log(id);

        userClickedPattern.push(id);
        console.log(userClickedPattern);
    })

}


nextSequence();
animationSelectedColours();
getClickedButtonID();
playSound();
/*
// if game is over:
if () {
    // change h1 text to: "try again"
    $("#level-title").text("Try again...");
    // change h1 text color:
    $("h1").css("color", "red");
}
*/


function playSound() {

    $("#blue").click(function () {
        let audio = new Audio("sounds/blue.mp3");
        audio.play();
    })
    
    $("#green").click(function () {
        let audio = new Audio("sounds/green.mp3");
        audio.play();
    })
    
    
    $("#red").click(function () {
        let audio = new Audio("sounds/red.mp3");
        audio.play();
    })
    
    $("#yellow").click(function () {
        let audio = new Audio("sounds/yellow.mp3");
        audio.play();
    })

}


console.log($("#green").attr("id"));
