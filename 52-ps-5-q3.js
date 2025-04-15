//  filter from number divisible by 10 from a given array

let arr = [10, 2, 30,]
let n = arr.filter((x)=>{
    return x%10 == 0
})
console.log(n);