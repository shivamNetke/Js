let arr1 = [2, 4, 6, 8]
let arr2 = arr1.reduce((h1, h2)=>{
    return h1 + h2      //2+4+6+8=20
})
console.log(arr2);

//second method

let a1 = [4, 8, 12, 16]
const reduce_func = (h1, h2) =>{
    return h1 +h2
}
let na = a1.reduce(reduce_func)
console.log(na);