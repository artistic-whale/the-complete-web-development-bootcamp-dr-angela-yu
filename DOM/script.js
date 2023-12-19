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