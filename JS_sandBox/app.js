//TYPE CONVERSION

//declare a variable
let val;

//TO CONVERT TO STRING 1
val = String(599);
val = String(4+4);

//Boolean to string

val = String(true);

//Date to a string
val = String(new Date())

//Array to string
val = String([1,2,3,4,5])

//TO CONVERT TO STRING 2

val = (5).toString()
val = (true).toString();


//STRING TO NUMBER
val = Number("5");
console.log(val.toFixed())

//BOOLEAN TO NUMBER
val = Number(true) 
val = Number(false) 
val = Number(null) 
val = Number("hello") //NaN
val = parseInt("100")  //100
val = parseFloat("100.90"); //100.9




//output
console.log(val); //599
console.log(typeof val);//string
console.log(val.length) //3

//TYPE COERHESION

let val1 = String(9);
let val2 = 1;
let sum = (val1 + val2);
console.log(typeof sum);
console.log(sum);

