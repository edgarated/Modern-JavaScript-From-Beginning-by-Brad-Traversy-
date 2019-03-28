//ARRAY METHODS

const numbers = [1,2,3,4,5,6,7]
//OR
const numbers2 = new Array(1,2,3,4,5,6,7,6)
const fruit = ["orange", "paw paw", "cashew", "mango", "banana"];
const mixed = [1,3,"bread",{name : "obi"}, new Date()];

let val;

//To get length of array
val = numbers.length; //7

//To check if its an array
val = Array.isArray(numbers2); //true

//to get a single value from an array
val = fruit[3]; //mango

//insert into array
numbers[2] = 900;
fruit[5] = "aki"

//to find index of value

val = numbers.indexOf(4); //3

//mutating arrays
//add on the end
numbers.push(20);

//add to front of array
numbers.unshift(345);

//remove from the end
numbers.pop()

//remove from the front
numbers.shift()

//splice values
numbers.splice(0,2)

//Reverse array
numbers.reverse()

//concatenate array
val = numbers.concat(fruit)

//sorting arrays
val = fruit.sort()

//use the compare function

val = numbers.sort(function(x,y){
return x - y;
})

//reverse sort
val = numbers.sort(function(x,y){
  return y - x;
  })

  //find

  function under50(num){
return num < 4;
  }
  val = numbers.find(under50)

console.log(val)
// console.log(numbers)
// console.log(fruit)