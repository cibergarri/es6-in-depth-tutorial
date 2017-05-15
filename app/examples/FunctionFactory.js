//Function factories

const addSuffix= (x) => {
    const concat = (y) =>  {
        return y + x;
    }
    return concat;
}

let add_ness = addSuffix("ness");
console.log(add_ness); //function

let h = add_ness("happi");
console.log(h);  //hapiness

let add_ful = addSuffix("ful");
let f = add_ful("fruit");
console.log(f);  //fruitful


///

/*const product = (x) => {
    return y=>{
        return y*x;
    }    
}
//Equivalent:
*/
const product = x =>  y => y * x;

let mult5=product(5);

console.log(mult5(7)); //35

let double= product(2);
console.log(double(9));//18