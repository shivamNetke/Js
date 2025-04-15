let arr = [18, 45, 7]
let a = arr.map((value, index)=>{
    console.log(value, index);
    return value + 1;
})
console.log(a);