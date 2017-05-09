console.log('test');
const LIMIT=100;
//LIMIT+=10; ERROR
console.log(LIMIT);

function print(){
    console.log("ES6 rocks!");
    let insert ='world';
    console.log(`Hello, ${insert}`);  ///example of a template literal use "`"
};

print();

// LET/CONST
let limit =100;
limit +=100;
limit =200;
console.log(limit);

const emails= ['frodo@email.com','sam@email.com','merry@email.com']
//emails =[]; ERROR

emails.push('pippin@email.com');//It doesn't change the const value

console.log(emails);
