// keyof guard

type Alphanumeric = string | number;

function add(param1: Alphanumeric, param2: Alphanumeric): Alphanumeric {
    if (typeof param1 === 'number' && typeof param2 === 'number') {
        return param1 + param2;
    } else {
        return param1.toString() + param2.toString();
    }
}

add('1', '2');
add(1, 2);

// In guard

type NormalUserType = {
    name: string;
}

type AdminUserType = {
    name: string;
    role: 'admin';
}

function getUser(user: NormalUserType | AdminUserType) {
    if ('role' in user) {
        return `I am an admin and my role is ${user.role}`;
    }
    else {
        return `I am a normal user`;
    }
}

const normalUser1: NormalUserType = { name: 'Abdur Rahman' };
const adminUser1: AdminUserType = { name: 'Shajib', role: 'admin' };

console.log(getUser(normalUser1));
console.log(getUser(adminUser1));

// instanceof guard

class Animal1 {
    name: string;
    species: string;
    constructor(name: string, species: string) {
        this.name = name;
        this.species = species;
    }

    makeSound() {
        console.log('I am making sound');
    }
}

class Dog extends Animal1 {
    constructor(name: string, species: string) {
        super(name, species);
    }
    makeBark() {
        console.log('I am barking');
    }
}
class Cat extends Animal1 {
    constructor(name: string, species: string) {
        super(name, species);
    }
    makeMeaw() {
        console.log('I am Meawing');
    }
}

function isCat(animal: Animal1): animal is Cat {
    return animal instanceof Cat;
}

function getAnimal(animal: Animal1) {
    if (animal instanceof Dog) {
        animal.makeBark();
    }
    else if (isCat(animal)) {
        animal.makeMeaw();
    }
    else {
        animal.makeSound();
    }
};

const animal1 = new Dog('German bhai', 'dog') // instance---> Dog

const animal2 = new Cat('Persin bhai', 'cat'); // instance -----> cat

getAnimal(animal1);
getAnimal(animal2);