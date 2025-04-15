// keep adding number to the array in 1 until 0 is added to array
prompt = require('prompt-sync')();



let arr = [1, 2, 3, 4, 5, 6, 7, 8]
let a;
do{
    a = prompt("enter a number")
    a = Number.parseInt(a)
    arr.push(a)
}while(a != 0);
console.log(arr);