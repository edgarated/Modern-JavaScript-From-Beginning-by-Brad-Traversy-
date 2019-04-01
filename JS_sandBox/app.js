//Replacing-Elements in the DOM

const newHead = document.createElement("h5");
newHead.id = "task-title";
const item = document.createTextNode("Breaking");
newHead.appendChild(item);

//old heading

const oldHead = document.querySelector("#task-title");

//parent
const cardAct = document.querySelector(".card-action");

cardAct.replaceChild(newHead, oldHead);



// TO REMOVE ELEMENT FROM THE DOM
const lis = document.querySelectorAll("li")
const list = document.querySelector("ul")
lis[4].remove();

 

//CLASSES AND ATTRIBUTE
const firstli = document.querySelector("li:first-child");
const link = firstli.children[0];

//CLASSES 
let val;
val = link.className
val = link.classList
val = link.classList[0]
link.classList.add("pretest");
link.classList.remove("pretest");
val = link

//ATTRIBUTES
val = link.getAttribute("href")
val = link.setAttribute("href", "http://google.com")
val = link.hasAttribute("title");

console.log(val)