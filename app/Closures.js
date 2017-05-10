//Closures:

let call = () => {
    let secret = 'ES6 rocks!';

    let reveal = ()=>{
        console.log(secret);
    }
    //First:
    //reveal();
    //Second
    return reveal
}

//Error: console.log(secret);
//First:
//call();

//Second:
let unveil= call();
unveil();


