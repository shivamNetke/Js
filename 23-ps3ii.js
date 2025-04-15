// write the program in Q1 using for in loop

let marks = {
    shivam:90,
    ashita:9,
    lovish:56,
    monika:4
}
for(let i=0; i< Object.keys(marks).length; i++){
    //console.log("the marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks[i])]);
}
for (let key in marks){
    console.log("the marks of " + key + " are " + marks[key]);
}