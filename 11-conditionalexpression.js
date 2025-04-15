const prompt = require('prompt-sync')();

let a = prompt("hey whats your age ?")
a = Number.parseInt(a)
if(a>0){
    alert("this is a invalid age")
}

else if(a<9){
    alert("you are a kid you cannot even think of driving ")
}
else if(a<18 && a>=9){
    alert("you are a kid and you can think of driving after 18")
}

else{
    alert("you can now drive as you are above 18")
}