class Ninja{
    constructor(name,health){
        this.name = name;
        this. health= health;
        this. speed= 5;
        this. strength=3;

    }
    sayeName(){
        console.log('my name is ${this.name}');
        return this;
    }

    showStats(){
        console.log('name:${this.name}');
        console.log('health:${this.health}');
        return this ;
    }
    drinksake(){
        this.health+=10;
        
    }
}
const ninja1 = new Ninja("rr");
ninja1.sayeName().showStats().drinksake().showStats();