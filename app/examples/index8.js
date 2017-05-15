const addToCart = (itme,number)=>{
    //return Number.isFinite(number);
    return Number.isSafeInteger(number);
}

console.log(addToCart('shirt',5));
console.log(addToCart('shirt',Infinity));
console.log(addToCart('shirt',Math.pow(2,54)));