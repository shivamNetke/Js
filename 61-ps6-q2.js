// in q2 use confirm to ask the user if he wants to see the prompt again
let runagain = true;
const candrive = (age)=>{
    return age>=18?true:false
 }
while(runagain){
let age = prompt("enter your age")
age = Number.parseInt(age)
const candrive = (age)=>{
   return age>=18?true:false
}
if(candrive(age)){
    alert("yes you can drive")
}
else{
    alert("you cannot drive")
}
runagain = confirm("do you want to play again")
}