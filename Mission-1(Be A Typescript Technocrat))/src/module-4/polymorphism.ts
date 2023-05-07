class Person2 {
    takeNap(): void {
        console.log('I am sleeping a 8 hours per day');
    }
}
class student extends Person2 {
    takeNap(): void {
        console.log('I am sleeping a 10 hours per day');
    }
}
class developer1 extends Person2 {
    takeNap(): void {
        console.log('I am sleeping a 5 hours per day');
    }
}

function getNap(param: Person2) {
    param.takeNap();
}

const person1 = new Person2();
const person2 = new student();
const person3 = new developer1();
getNap(person1);
getNap(person2);
getNap(person3);