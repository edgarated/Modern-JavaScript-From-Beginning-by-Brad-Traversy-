//SWITCH STATEMENT

const color = "pink";
switch(color){

case "purple":
console.log("color is purple");
break

case "blue":
console.log("color is blue");
break

case "pink":
console.log("color is pink");
break

case "yellow":
console.log("color is yellow");
break

case "black":
console.log("color is black");
break
default:
console.log("not a color")
}


//To GET THE DAY OF THE WEEK USING SWITCH METHOD

let day;
switch(new Date().getDay()){

  case 0:
  day = "sunday";
  break;

  case 1:
  day = "monday";
  break;

  case 2:
  day = "tuesday";
  break;

  case 3:
  day = "wednesday";
  break;

  case 4:
  day = "thursday";
  break;

  case 5:
  day = "friday";
  break;

  case 6:
  day = "saturday";
  break;

}

console.log(`Today is ${day}`)