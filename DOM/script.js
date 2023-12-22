document.querySelector("h1").innerHTML = "Good bye";


// 118. Selecting HTML Elements with JavaScript
/* 
Looks through the webpage and searches for the element with a particular tag name
Element"s" is plural here
 */
document.getElementsByTagName("li");
document.getElementsByTagName("li").length;
document.getElementsByTagName("li")[2].style.color = "purple";

// You can also get elements by classname
document.getElementsByClassName("btn");

// or a single element by using id
document.getElementById("title");

// for if you want to change the text
document.getElementById("title").innerHTML = "Hello again";

// Here you can put an element, class or id; this doesn't matter
document.querySelector("h1");
document.querySelector("#title");
document.querySelector(".btn");

// You can combine selecters as well
document.querySelector("li a"); // This is a hierarchical selector
document.querySelector("li.item");

document.querySelector("#list .item"); // Gets the first element
document.querySelectorAll("#list .item"); // Gets all elements

// For changing and manipulating a specific item in an array, you have to specify it's index
document.querySelectorAll("#list .item")[2].style.color = "blue";


// 119. Manipulating and Changing Styles of HTML Elements with JavaScript
document.querySelector("h1").style.color = "red";
document.querySelector("h1").style.fontSize = "10rem"; // here is fontSize CamalCase since JS uses this convention
document.querySelector(".btn").style.backgroundColor = "yellow";


// 120. The Separation of Concerns: Structure vs Style vs Behaviour
/*
With the Separation of Concerns, you make it easier to debug your code and use the things as you should them.
For instance, HTML is just for displaying text-content, whereas CSS is just for changing the style, and JS for adding behaviour.

    If a particular element is not looking the way we want it to, then we can simply dig into the stylesheet and change it.
    But if something is not behaving the way we want it to, then we can go to the JavaScript and change it their.
*/
document.querySelector("button").classList;
document.querySelector("button").classList.add("invisible"); // adds a new class name to the element(s)
document.querySelector("button").classList.remove("invisible"); // removes a defined class name from the element(s)
document.querySelector("button").classList.toggle("invisible"); // adds if not available, removes if available

document.querySelector("h1").classList.add("huge");