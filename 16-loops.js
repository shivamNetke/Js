const prompt = require("prompt-sync")();
let sum = 1;
let n = prompt("Enter the value of n");
n = Number.parseInt(n);
for (let i = 1; i < n; i++) {
  sum *= i;
}
console.log(" sum of first " + n +" natural numbers is " + sum);
