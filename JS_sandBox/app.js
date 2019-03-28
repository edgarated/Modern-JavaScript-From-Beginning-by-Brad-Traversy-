//CONDITIONALS

const id = 100;

//EQUAL TO
if (id == 100){
  console.log("CORRECT")
}else{
  console.log("INCORRECT")
}

//NOT EQUAL TO
if (id != 101){
  console.log("CORRECT")
}else{
  console.log("INCORRECT")
}

//EQUAL TO VALUE AND TYPE
if (id === 100){
  console.log("CORRECT")
}else{
  console.log("INCORRECT")
}

// NOT EQUAL TO VALUE AND TYPE
if (id !== 100){
  console.log("CORRECT")
}else{
  console.log("INCORRECT")
}

//Test if undefined

if(typeof id !== "undefined"){
console.log(`THE ID IS ${id}`)
} else{
  console.log("NO ID");
}

//GREATER OR LESS THAN
if (id > 200){
  console.log("CORRECT")
}else{
  console.log("INCORRECT")
}

//IF ELSE

const color = "yellow";
if(color === "yellow"){
  console.log("color is yellow")
} else if(color === blue){
  console.log("color is blue")
}else{
  console.log("no color found")
}

//LOGICAL OPERATORS

 const name = "steve";
 const age = 20

 // AND &&
 if(age > 0 && age < 10){
   console.log(`${name} is a baby`)
 }else if(age > 10 && age < 20){
   console.log(`${name} is a teenager`)
 }else{
   console.log(`${name} is an adult`)
 }

 // OR ||
 if(age < 10 || age > 50){
   console.log(`${name} cannot run in the race`)
 }else {
   console.log(`${name} is registered for the race`)
 }


 //TERNARY OPERATORS
 console.log(id === 110? "CORRECT" : "INCORRECT")