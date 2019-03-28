//OBJECT LITERALS
const person = {
firstName : "Chukwu",
lastName : "Ebuka",
age : 36,
email : "lorem@outlook.com",
hobbies : ["singing", "dancing"],
address: {
  city : "Ikeja",
  state : "Lagos"
},
getBirthdayYear : function(){
  return 2019 - this.age;
}
}

let val;

val = person;
//get dpecific value
val = person.firstName
val = person["lastName"] 
val =person.age
val = person.hobbies[0]
val = person.address.city
val = person.address["city"]
val = person.getBirthdayYear();

console.log(val)