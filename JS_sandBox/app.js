//Traversing-The-DOM 

let val;
const list = document.querySelector("ul.collection");
const listItem = document.querySelector("li.collection-item:first-child")

val = listItem;
val = list;

//Get child nodes

val = list.childNodes

//get children element nodes

val = list.children
val = list.children[4].textContent = "Hello"

//get children of children

val = list.children[2].children[0].id = "text-link"
val = list.children[2].children[0]

val = list.firstElementChild
val = list.lastElementChild

//Get parent node

val = listItem.parentNode
val = listItem.parentElement
val = listItem.parentElement.parentElement

//get next sibling
val = listItem.nextElementSibling.nextElementSibling.nextElementSibling.previousElementSibling

//get prev sibling
// val = listItem.previousElementSibling

console.log(val)