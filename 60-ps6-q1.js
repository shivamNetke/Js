// write a program using prompt function to take input of age as a value from the user and use alert to tell him if he can drive

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