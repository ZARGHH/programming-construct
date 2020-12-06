console.log("Welcome to For loop Assignment");
function isPrimeNumber() {
    let temp;
    var isPrime = true;
    for (let i = 2; i <= num / 2; i++) {
      temp = num % i;
      if (temp == 0) {
        isPrime = false;
        break;
      }
    }
  
    if (isPrime) console.log(num + " is a Prime Number");
    else console.log(num + " is not a Prime Number");
  }
  
  readline = require("readline-sync");
  let num = readline.question("Enter the number: ");
  isPrimeNumber(parseInt(num));
