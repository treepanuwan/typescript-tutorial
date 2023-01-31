class InfoData {
    firstName: string = "";
    lastName: string = "";
}

const info = new InfoData();
info.firstName = "Mark";
info.lastName = "Hugh";
console.log(`${info.firstName} - ${info.lastName}`);

// Constructor
class InfoData1 {
    x: number;
    y: number;
    z: number;
    constructor(x: number = 0, y: number = 0, z: number = 0) {
        this.x = x;
        this.y = y;
        this.z = x + y;
        console.log("Constructor is ready");
    }
}
const infoData1 = new InfoData1(1,2,3);
console.log(`Value is ${infoData1.z}`);

// Overloads
// class infoOverLoad {
//     constructor(x:number, y:string);
//     constructor(s: string);
//     constructor(z: string, zz?: any) {
        
//     }
// }

// Getter & Setter
class InfoGetSet {
    _x: number = 0;
    get x(): number {
        this._x = this._x + 1;
        return this._x;
    }
    set x(value: number) {
        this.x = value;
    }
}
const i = new InfoGetSet();
console.log(i._x);
console.log(i.x);
console.log(i.x);
console.log(i.x);

// Extends
class Person {
    _name: string;
    constructor(name: string = "") {
        this._name = name;
    }
    showName() {
        console.log(`I'm ${this._name}`);
    }
}
// super ใช้ต่อเมื่อคลาสลูกมี constructor 
class Employee extends Person {
    constructor(name: string, private salary:number) {
        super(name);
    }
    showSalary() {
        console.log(`Salary is ${this.salary}`);
    }
}
const person = new Person("John");
person.showName();
const employee = new Employee("Henry", 20000);
employee.showName();
employee.showSalary();

// abstract
abstract class Character {
    public name: string;
    public damage: number;
    public attackSpeed: number;

    constructor(name: string, damange: number, speed: number) {
        this.name = name;
        this.damage = damange;
        this.attackSpeed = speed;
    }
    
    public abstract damangePerSecond(): number;
}
// modifier => public || private
class Goblin extends Character {
    constructor(name: string, damage: number, speed: number) {
        super(name, damage, speed);
    }
    public damangePerSecond(): number {
        return this.damage * this.attackSpeed;
    }
}

const goblin = new Goblin("Golin No.001", 999, 99);
console.log(`${goblin.name} damage per second : ${goblin.damangePerSecond()}`);