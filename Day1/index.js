 
const {addToCart ,chnageQty } = require("./CartModule");

console.log("Welcome Abhinav Katiyar");

let l = [10, 20, 30, 50];

for (let i = 0; i < l.length; i++) {
    console.log(i, l[i]);
}

console.log(addToCart());
console.log(chnageQty());

