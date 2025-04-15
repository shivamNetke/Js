let num = [1,2,3,34,4];
let b =num.toString()
console.log(b);
let c = num.join("and")
console.log(c, typeof c)
num.pop()
console.log(num);
let r = num.pop() //pop return the popped element
console.log(num, r);