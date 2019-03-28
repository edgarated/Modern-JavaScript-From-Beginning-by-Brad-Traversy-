//STRING METHODS AND CONCATENATION

const firstName = "Femi";
const lastName = "Atunwa";
const age = 27;
const str = "Hello my name is Ebuka"
const tag = "car, food, juice, junky"
let val;

val = firstName + lastName;
val = firstName + ' ' + lastName;

// To Append
val = "Ebuka "
val += "Tunde"

//To concatenate
val = "Hello, My name is " + firstName + ' ' + lastName + " , and i am " + age + " years old";

//Escaping
val =  "that's awesome, i can't wait for the show to start"

//Length
val = firstName.length

//concat()

val = firstName.concat(' ' , lastName);  //Femi Atunwa

//change case
val = firstName.toLowerCase() //femi
val =lastName.toUpperCase() //ATUNWA

//indexOf()

val =firstName.indexOf("e"); //1
val = lastName.lastIndexOf("n") //indexOf return a number when an alphabet is the input
val = lastName.charAt('3') //n    //charAt return an alphabet when number is the input

//to get the last char

val = firstName.charAt(firstName.length - 1) //i

//substring()

val = firstName.substring(1,3) //em

//slice
val = lastName.slice(0,2) //At
val = lastName.slice(-2) //wa  it starts slicing fron the back

val = str.split(' ')
val = tag.split(",")

//replace()
val = str.replace("Ebuka", "adaobi")  //adaobi replaces Ebuka

//includes()

val = str.includes("Ebuka") //true

console.log(val);



