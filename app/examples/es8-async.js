//ASYNC

async function async_one(){
    return "one";
}
//async_one().then(response=> console.log(response));
async function async_two(){
    return "two";
}

async function async_three(){
    const one= await async_one();
    console.log(one);
    const two= await async_two();
    console.log(two);
}

async_three().catch(response=> console.log(response));

async function async_four(){
    const [res_one,res_two]= await Promise.all([async_one(),async_two()]);    
    console.log("1: "+  res_one,"2: "+ res_two);
}
     
async_four();

async function async_error(){
    throw new Error('Issue with async');
}

//handle exception:
//async_error().catch(error=> console.log(error));

