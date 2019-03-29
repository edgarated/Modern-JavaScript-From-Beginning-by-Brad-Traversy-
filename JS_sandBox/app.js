//DOM SELECTORS


//getElementById
// console.log(document.getElementById("task-title"))

// //Get things from the element
// console.log(document.getElementById("task-title").id)
// console.log(document.getElementById("task-title").className)

// const taskTitle = document.getElementById("task-title");

// //change styling
// taskTitle.style.background = "#333";
// taskTitle.style.color = "white";
// taskTitle.style.padding = "5px";

// //change the content
// taskTitle.textContent = "Task List"
// taskTitle.innerText = "My Tasks"
// taskTitle.innerHTML = '<span style= "color:red">Task List</span>'


//document.querySelector
// console.log(document.querySelector("#task-title"))
// console.log(document.querySelector(".card-title"))
// console.log(document.querySelector("h5"))

// document.querySelector("ul li").style.color = "pink"
// document.querySelector("li:nth-child(4)").style.color = "pink"
// document.querySelector("li:nth-child(odd)").style.background = " "
// document.querySelector("li:nth-child(odd)").innerText = "hi"


//document.getElementByClassName
// const list = document.getElementsByClassName("collection-item")
// console.log(list)
// console.log(list[0])
// list[2].style.color = "red";
// list[3].textContent = "hello"


//document.getElementByTagName

// let lis = document.getElementsByTagName("li")
// console.log(lis)

// lis[2].style.color = "red";
// lis[3].textContent = "hello"

// //convert HTML collection into array

// lis = Array.from(lis)

// lis.forEach(function(li){
// console.log(li.className)
// li.textContent = "hello"

// })
// console.log(lis)

//document.querySelectorAll
const items = document.querySelectorAll("ul.collection li.collection-item")

items.forEach(function(item, index){

  item.textContent = `${index}: hello`

})



const liOdd = document.querySelectorAll("li:nth-child(odd)")
const liEven = document.querySelectorAll("li:nth-child(even)")

liOdd.forEach(function(li, index){
li.style.background = "#ccc"

})


liEven.forEach(function(li, index){
  li.style.background = "#fefe"
  
  })
  

console.log(items)