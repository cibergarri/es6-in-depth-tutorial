{
    const arrayIterator = (array) => {
        let index = 0;

        return {
            next:() => {            
                if(index < array.length){
                    let next= array[index];
                    index+=1;
                    return next;
                }
            }
        }
        }

        let it =arrayIterator([1,2,3]);
        console.log(it.next());
        console.log(it.next());
        console.log(it.next());
        console.log(it.next());
}
{
    function* arrayIterator(){
        yield arguments; //[1,2,3]

        for(let arg of arguments){
            yield arg; //1 //2 //3
        }
        yield* arguments; //1 //2 //3
    }
    var it= arrayIterator(1,2,3);
    console.log(it.next().value); //[1,2,3]
    console.log(it.next().value); //1
    console.log(it.next().value); //2    
    console.log(it.next().value); //3
    console.log(it.next().value); //1
    console.log(it.next().value); //2
    console.log(it.next().value); //3
    console.log(it.next().value); //undefined
}
