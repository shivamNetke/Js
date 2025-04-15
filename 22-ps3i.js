//write a program to print the marks of a student in an object using for loop

let marks = {
    shivam: 90,
    ashita:9,
    lovish:56,
    monika:4
}
for(let i =0; i<Object.keys(marks).length;i++){
    console.log("the marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]]);
}