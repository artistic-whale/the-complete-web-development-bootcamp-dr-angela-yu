function add(number1, number2) {
    return number1 + number2;
}


function subtract(number1, number2) {
    return number1 - number2;
}


function multiply(number1, number2) {
    return number1 * number2;
}


function divide(number1, number2) {
    return number1 / number2;
}


function calculator(number1, number2, operator) {
    return operator(number1, number2);
}


// if (button has been clicked ) {
//     then show clicked button on display
// }

let getAllKeys          = document.querySelectorAll("button");
let calculatorDisplay   = document.getElementsByClassName("calculator__display");
let numberKey0          = document.querySelector("#number0");


for (let i = 0; i < getAllKeys.length; i++) {
    getAllKeys[i].addEventListener("click", function () {
        calculatorDisplay.textContent = getAllKeys[i];
        console.log([i]);
    });
}

// if (document.querySelector("#number0").addEventListener("click")) {
//     document.querySelector("#calculator__display").innerHTML = "0";
// }