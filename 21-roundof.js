function plusavg(x,y){
    return Math.round( 1+(x +y)/2);
}
let a = 1;
let b = 2;
let c = 3;

console.log("plus average of a and b is ",plusavg(a,b));
console.log("plus average of b and c is ",plusavg(b,c));
console.log("plus average of c and a is ",plusavg(c,a));
