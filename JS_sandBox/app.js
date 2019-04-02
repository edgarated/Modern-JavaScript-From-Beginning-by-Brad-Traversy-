//10_ Keyboard-Input-Events

const form = document.querySelector("form");
const taskInput = document.querySelector("#task");
const heading = document.querySelector("h5")
const sele = document.querySelector("select");

//clear input
taskInput.value = '';

// form.addEventListener("submit", runEvent);
// function runEvent(e){
// // e.preventDefault()
// //   console.log(`EVENT TYPE : ${e.type}`)



//   //get input
//   // console.log(taskInput.value)
  
// }
//keydown event
// taskInput.addEventListener("keydown", runEvent);

// function runEvent(e){
// console.log(`EVENT TYPE : ${e.type}`)
// console.log(e.target.value)
// // heading.textContent = e.target.value;

// }

//keyup  event
// taskInput.addEventListener("keyup", runEvent);

// function runEvent(e){
// console.log(`EVENT TYPE : ${e.type}`)
// console.log(e.target.value)
// // heading.textContent = e.target.value;

// }

//keypress
// taskInput.addEventListener("keypress", runEvent);

// function runEvent(e){
// console.log(`EVENT TYPE : ${e.type}`)
// console.log(e.target.value)
// // heading.textContent = e.target.value;

// }

//keypress
// taskInput.addEventListener("keypress", runEvent);

// function runEvent(e){
// console.log(`EVENT TYPE : ${e.type}`)
// console.log(e.target.value)
// // heading.textContent = e.target.value;

// }

//focus event/ blur event

// taskInput.addEventListener("focus", runEvent);
// // taskInput.addEventListener("blur", runEvent);

// function runEvent(e){
//   console.log(`EVENT TYPE : ${e.type}`)
//   // console.log(e.target.value)
//   // heading.textContent = e.target.value;
  
//   }


//cut event
//   taskInput.addEventListener("cut", runEvent);

// function runEvent(e){
//   console.log(`EVENT TYPE : ${e.type}`)
//   // console.log(e.target.value)
//   // heading.textContent = e.target.value;
  
//   }

//paste event
//   taskInput.addEventListener("paste", runEvent);

// function runEvent(e){
//   console.log(`EVENT TYPE : ${e.type}`)
//   // console.log(e.target.value)
//   // heading.textContent = e.target.value;
  
//   }


//paste event
//   taskInput.addEventListener("input", runEvent);

// function runEvent(e){
//   console.log(`EVENT TYPE : ${e.type}`)
//   // console.log(e.target.value)
//   // heading.textContent = e.target.value;
  
//   }

//change event
  sele.addEventListener("change", runEvent);

function runEvent(e){
  console.log(`EVENT TYPE : ${e.type}`)
  console.log(e.target.value)
  // heading.textContent = e.target.value;
  
  }
