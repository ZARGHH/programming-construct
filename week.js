const prompt = require( 'prompt= sync') ();
const number = prompt("enter number");
switch(Number(number)) {
case 1:
console.log("sunday");
break;
case 2:
console.log("monday");
break;
case 3:
console.log("tuesday");
break;
case 4:
console.log("wednesday");
break;
case 5:
console.log("thursday");
break;
case 6:
console.log("friday");
break;
case 7:
console.log("saturday");
break;
default:
console.log("enter the number between 1 to 7");
break;
}
