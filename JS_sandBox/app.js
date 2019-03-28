//DATE AND TIME
let val;
const today = new Date();
let birthday = new Date(" 9-10-1981 11:24:00")
birthday = new Date(" september 10 1982")

val = today.getMonth()
val = today.getDate()
val = today.getDay()
val = today.getFullYear()
val = today.getHours()
val = today.getMinutes()
val = today.getSeconds()


birthday.setDate(12)
birthday.setMonth(2)
birthday.setFullYear(1984)
birthday.setMinutes(30);


console.log(val);