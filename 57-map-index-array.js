let arr = [18, 45, 7]
let a = arr.map((value, index, array)=>{
    console.log(value, index, array);
    return value + 1;
})
console.log(a);