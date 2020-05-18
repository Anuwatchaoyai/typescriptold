class Person {
    // private firstName = "";
    // private lastName = "";
    firstName = "";
    lastName = "";

    constructor(firstName:string, lastName:string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    name(){
        return `${this.firstName} ${this.lastName}`;
    }    
    whoAreYou(){
        return `Hi i'm ${this.name()}`;
    }
}

class Student extends Person {
    course = "";
    
    constructor(firstName:string, lastName:string, course:string){
        super(firstName, lastName);
        this.course = course;
    }

    whoAreYou() {
        return `${super.whoAreYou()} and i'm studying ${this.course}`;
    }
    // test() {
    //     console.log(this.firstName);
    // }
}
let myName = new Person("Anuwat", "Chaoyai");
let myCourse = new Student("Anuwat", "Chaoyai", "Angular");
console.log(myName.name());
console.log(myName.whoAreYou());
console.log(myCourse.whoAreYou());
// console.log(myCourse.test());
