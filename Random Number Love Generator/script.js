'use strict';

// var n = Math.random();
// n = n * 6;
// n = Math.floor(n) + 1;
// console.log(n);

// Love calculator
/*
    It should have:
    1) 2 prompts asking for the names of the individuals
    2) And then, it should be able to completly ignore that
    3) And then, it should calculate a random number in percentage (0 - 100%)
    4) Alert with message displayed
*/
// var firstPerson = prompt("What's your name?");
// var secondPerson = prompt("What's your loved ones name?");

var randomLoveScore;

function randomLoveCaculator() {
    randomLoveScore = Math.floor(Math.random() * 101);
    if (randomLoveScore < 50) {
        console.log("Not suited well to eachother :(")
    } else if (randomLoveScore === 50) {
        console.log("There is a 50/50% chance for you to get there.")
    } else {
        console.log("You guys should ...")
    }

    console.log("Your love score is: " + randomLoveScore + "%");
}

randomLoveCaculator();