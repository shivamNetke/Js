const prompt = require('prompt-sync')();

let age = prompt("what is your age ")
if(age>10 && age<20){
    console.log("your age lies between 10 and 20");
}
else{
    console.log("your age doesnt lies between 10 and 20");
}
