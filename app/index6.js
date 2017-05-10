//map methods
let values= [20,30,40];

/*let double=(n)=>{
    return n*2;
}*/

let doubled = values.map((n)=> n*2);
console.log(doubled);

//Filter method
let point=[7, 16, 21, 4, 3, 22, 5];

/*let highscores= point.filter((n)=>{
    return n>15
});*/
let highscores= point.filter((n)=>n>15);

console.log(highscores);