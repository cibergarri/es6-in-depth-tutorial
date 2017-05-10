//Private methods

const budget = ()=>{
    let balance =0;
    let changeBal = (val)=> {
        return balance += val;
    }
    const deposit20 = () => changeBal(20);
    const withdraw20 = () => changeBal(-20);
    const check = () => balance;

    return {
        /*deposit20:deposit20,
        check:check,*/
        //Equivalent:
        deposit20,check,withdraw20
    }

}

let wallet = budget();
wallet.deposit20();
wallet.withdraw20();
wallet.deposit20();
wallet.deposit20();
console.log(wallet.check());

console.log(wallet.balance); //undefined (not returned -> private)