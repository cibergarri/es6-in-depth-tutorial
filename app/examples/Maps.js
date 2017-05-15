//Data Structures II
//Maps : "dictionary?"
let a = new Map();

let key_1= "string_key";
let key_2= {a:"key"};
let key_3= function(){};

a.set(key_1,'return value for a string key');
a.set(key_2,'return value for an object key');
a.set(key_3,'return value for a function key');

console.log(a);


//iterate:
let numArr = [[1,'one'],[2,'two'],[3,'three']];
let valMap = new Map(numArr);
console.log(valMap);

for(let [key,value] of valMap.entries())
{
    console.log(`${key} points to ${value}`);
}

//how many times are each letter typed:
let string = 'asdasdsadeafvzdvxcvwaefdaadefygausagvduagsuydagsusdgazz';
let letters= new Map();

for(let i=0;i<string.length;i++)
{
    let letter= string[i];
    if(!letters.has(letter)){
        letters.set(letter,1);
    }
    else{
        letters.set(letter, letters.get(letter)+1);
    }
}

console.log(letters);
