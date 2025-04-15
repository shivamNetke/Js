// extract the amount out of the string "place give Rs 1000"
let str = "please give rs 1000";
let amount = Number.parseint (str.slice("please give rs".length));
console.log(amount);
console.log(typeof amount);