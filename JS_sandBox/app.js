//local storage

// let profile = {

//   name : "kingsley okobo",
//   school: "fedi",
//   sex: "male",
//   age :15
// }

// const myPro = JSON.stringify(profile);
// console.log(typeof myPro);

// localStorage.setItem("profile", myPro);

// const toJSON = JSON.parse(myPro);
// console.log(toJSON.school);


const addy = document.querySelector("form");
addy.addEventListener("submit",
function(e){
const task = document.getElementById("task").value;
let tasks;
if (localStorage.getItem("tasks")=== null){
tasks = [];
}else{
  tasks = JSON.parse(localStorage.getItem("tasks"));
}
tasks.push(task);
localStorage.setItem("tasks", JSON.stringify(tasks))
alert("Task Saved")
e.preventDefault();

});