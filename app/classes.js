import Animal from "./Animal"

class Lion extends Animal {
    constructor(name, height, color) {
        super(name, height);
        this.color=color;
    } 

    hello(){
        console.log(`Hi, I'm ${this.name} from Pride Rock!!, my color is ${this.color}`);
    }
}

let king = new Animal("Mufasa",4.5);
console.log(king);
king.hello();


let son = new Lion("Simba",2,"golden");
console.log(son);
son.hello();