document;
document.firstElementChild; 
document.firstElementChild.firstElementChild;
document.firstElementChild.lastElementChild;
document.firstElementChild.lastElementChild.firstElementChild;
var heading = document.firstElementChild.lastElementChild.firstElementChild;
heading.innerHTML="Good Morning";
>heading.style.color="red";
document.firstElementChild.lastElementChild.children[5].lastElementChild;
var list3 = document.firstElementChild.lastElementChild.children[5].lastElementChild;
list3.style.color="blue";
document.getElementsByTagName("ul");
document.getElementsByTagName("li");

document.getElementsByTagName("li")[1].style.color="red";
document.getElementsByTagName("li").length;
document.getElementsByClassName("btn");
document.getElementsByClassName("btn")[0].style.color="red";

document.getElementById("title");
document.getElementById("title").innerHTML = "z Bye"
document.querySelector("h1");  
document.querySelector("#title");
document.querySelector(".btn");
document.querySelector("li a");
document.querySelector("body a");

document.querySelector(".btn #title"); // null is output

// use querySelectorAll
document.querySelectorAll("#list .item");

document.querySelectorAll("#list .item")[2].style.color="red";

// excercise: change list2 - second color - red
document.querySelectorAll("#list .item")[1].style.color="red";

//excercise: change list1 - google to red
document.querySelector("li a").style.color="red";
// only bullet to 8
document.querySelector("li").style.color="blue";

// change background of button
document.querySelector("button").style.backgroundColor="yellow";

// convert h1 to italics
querySelector("h1").innerHTML = "<em>Good Morning</em>";

