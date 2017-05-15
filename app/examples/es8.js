let obj={a:'one', b:'two',c:'three'};

let keys=Object.keys(obj);
let values= Object.values(obj);

//Entries proposal:
let entries= Object.entries(obj);

console.log(keys);
console.log(values);
console.log(entries); //Array keys + values

//of
for(let entry of entries){
    console.log(`key: ${entry[0]},value: ${entry[1]}`)
}


