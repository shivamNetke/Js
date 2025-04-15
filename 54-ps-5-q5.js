// use reduce to cal ulate factorial of a given number from an array of frist n natural numbers
//(n being the number whose fadtorial needs to be calculated)
let arr = [1, 2, 3, 4]
let n = arr.reduce((x1, x2) =>{
    return x1 * x2
})
console.log(n);


