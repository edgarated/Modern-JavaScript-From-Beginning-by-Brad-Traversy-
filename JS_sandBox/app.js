//FUNCTION DECLARATION

function greeting (firstName = "John", lastName = "Doe"){
return "Hello " + firstName + ' ' + lastName;

}
console.log(greeting("Ebuka", "Aneke"))

//FUNCTION EXPRESSIONS

const name = function(firstName, lasttName){

  return `his full name is ${firstName} ${lasttName}`
}
console.log(name("John", "Okoro"))

//IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS [IIFEs]
// (function(){
//   console.log("IIFE ran...");
// })();

// (function(name){
//   console.log("hello " + name);
// })("ebuka");


//PROPERTY METHODS

const todo = {
  add(){
    console.log(`Add to do..`)
  },
  edit(input){
    console.log(`Edit ${input}`)
  },

  delete(){
    console.log(`Delete...`)
  }
}

todo.add()
todo.edit(9)
todo.delete()


