//BLOCK scoping:

let limit=200;
var limit2=200;
const LIMIT=200;
{
    let limit=10;
    var limit2=10;
    const LIMIT=10;
    console.log(`backstage limit ${limit}`);
    console.log(`backstage limit2 ${limit2}`);
    console.log(`backstage LIMIT ${LIMIT}`);
}

console.log(`overall venue limit ${limit}`);
console.log(`overall venue limit2 ${limit2}`);
console.log(`overall venue LIMIT ${LIMIT}`);

//Functions:

function hello(){
    let message="Hello!";
    console.log(message);
}
function greeting()
{
    let message="How are you!";
    console.log(message);
}

hello();
greeting();