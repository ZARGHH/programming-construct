var myArray = [];

for (var i = 0; i <=10; i++) {
  myArray.push(Math.floor(Math.random()*999));
}
console.log(myArray)
console.log(Math.max(...myArray));
console.log(Math.min(...myArray));
var intArray = myArray.map(Number);
var second = intArray.sort(function(a,b){return b-a})[1]; 
console.log(second)
var second2 =intArray.sort(function(a, b) {return a - b;})[1];
  console.log(second2)
