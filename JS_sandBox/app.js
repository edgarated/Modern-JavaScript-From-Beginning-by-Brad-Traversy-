// 1: PRIMITIVE DATA TYPES

// STRING
const name = "John Doe";
console.log(typeof name);
//prints string

//NUMBER
const age = 24;
console.log(typeof age);
//prints number

//BOOLEAN
const hasKids = true;
console.log(typeof hasKids);
//prints boolean

//NULL
const car = null
console.log(typeof car);
// prints object [IN REALITY It IS A NULL]

//UNDEFINED
let test;
console.log(typeof test);
//prints undefined

//SYMBOL
const sym = Symbol();
console.log(typeof sym);
//prints symbol


// 2: REFERENCE TYPES

//ARRAYS
const cars = ["mercedez", "toyota", "GM", "Nissan"];
console.log(typeof cars)
//prints object

//OBJECT LITERAL

const address = {
   country : "Nigeria",
   city : "Lagos"
}
console.log(typeof address)
//prints object

//DATE
const today = new Date()
console.log(typeof today);
console.log(today);

