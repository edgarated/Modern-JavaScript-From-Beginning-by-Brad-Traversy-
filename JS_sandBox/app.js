//FOR LOOP

// for (let index = 0; index < 10; index++) {
//  if(index === 2){
//    console.log("super number");
//    continue;
//  }

//  if(index === 6){
//    console.log("stop the loop")
//    break;
//  }
//  console.log("Number " + index)
// }

//WHILE LOOP

// let i = 0
// while (i < 10) {
  
//   console.log( `Number : ${i}`)
//   i++;
// }

//DO WHILE LOOP
// let i = 0
// do {
//   console.log(i);
//   i++
// } while (i < 10);

//LOOPING THROUGH ARRAYS

const cars = ["toyota", "nissan", "chevy", "cherokee", "volks"]

//FOR LOOP
// for (let index = 0; index < cars.length; index++) {
//   const element = cars[index];
//   console.log(element)
  
// }

// FOR EACH
// cars.forEach(car => {
//   console.log(car)
// });

//REVERSING AN ARRAY
for (let index = cars.length; index >= 0 ; index--) {
  const element = cars[index];
  console.log(element)
  
}

//MAP
const users = [
{id : 1, name : "tunji"},
{id : 2, name : "rashidi"},
{id : 3, name : "zizu"},

];
const ids = users.map(function(user){

  return user.id
});
// console.log(ids);

//FOR IN LOOP

const user = {
  name : "atiku",
  location : "lagos",
  age : 23,
  hobby : "singing"

}

for (const x in user) {
  console.log(`${x} : ${user[x]} `)
}

//Example 2
const admin = {
  name : "atiku",
  location : "lagos",
  age : 23,
  hobby : "singing",
  quote : "live and let live"
}

for (const x in admin) {
  console.log(`${x} : ${admin[x]}`)
}