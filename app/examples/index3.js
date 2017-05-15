//Template literals
let a = `good`;
let greeting= `${a} morning`;
console.log(greeting);

let b=`birthday`;
let c=`Happy ${b}`;
console.log(c);


//Operating and destructuring assignment

/// { ... } == function(...){}

//Spread operator:
let x = [20,30,40];
let y = [10, ...x,50];
console.log(y);


let ones =['Dana','Erik','Frank']
let all =['Alice','Bob','Carl',...ones]
console.log(all);

//Parameter
function collect(...a){
    console.log(a);
}
collect(3,6,9,12,15);

