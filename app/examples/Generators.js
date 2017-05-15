//Generators:
//(for example: for generating Ids)

function* letterMaker(){    
    yield 'a';
    yield 'b';
    yield 'c';
}

let letterGen = letterMaker();
console.log(letterGen.next().value); //a
console.log(letterGen.next().value); //b
console.log(letterGen.next().value); //c
console.log(letterGen.next().value); //undefined


///
function* countMaker(){
    let count=0;
    while(count<3){
        yield count+=1;
    }
}

let countGen=countMaker();
console.log(countGen.next().value); //1
console.log(countGen.next().value); //2
console.log(countGen.next().value); //3
console.log(countGen.next().value); //undefined


///
function* evens(){
    let count=0;
    while(true){
        count+=2;
        let reset = yield count;
        if(reset){
            count=0;
        }
    }
}

let sequence = evens();
console.log(sequence.next().value); //2
console.log(sequence.next().value); //4
console.log(sequence.next().value); //6
console.log(sequence.next().value); //8
console.log(sequence.next().value); //10
console.log(sequence.next(true).value); //2
console.log(sequence.next().value); //4