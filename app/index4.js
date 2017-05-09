//Destructuring assignment in arrays and objects
let z=[4,5,6];

//let four= z[0];
//let five= z[1];
//equivalent:
let [four,five]=z;
console.log(four, five);

let animals=["Simba","test","Zazu","Ed"];
let [lion, ,bird] = animals;
console.log(lion, bird);


let king={
    name:'Mufasa',
    kids:1
};
//let name=king.name;
//let kids=king.kids;
//Equivalent
let {name, kids}=king;
console.log(name, kids);

let son= {name:'Simba', parents:2};
let name2, parents;
({name2, parents} = son);
console.log(name2, parents);