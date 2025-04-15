let x =5;
let y =6;
// &&  both condition have to be true
console.log("x<y and x==5",x<y && x==5);
console.log("x>y and x==5",x>y && x==5);
console.log("x>y and x!=5",x>y && x!=5);
console.log("x<y and x!=5",x<y && x!=5);

// ||  atleast one condition should be true
console.log("x<y and x==5",x<y || x==5);
console.log("x>y and x==5",x>y || x==5);
console.log("x>y and x!=5",x>y || x!=5);
console.log("x<y and x!=5",x<y || x!=5);

// (!false or !true)   changing the condition true to false or false to true
console.log('by using ! operator');
console.log(!false);
console.log(!true);
