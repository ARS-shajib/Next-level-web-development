class Animal {
    // name: string;
    // species: string;
    // sound: string;

    // constructor(name: string, species: string, sound: string) {
    //     this.name = name;
    //     this.species = species;
    //     this.sound = sound;
    // }

    //same things(commented part above) can do by a line below.it's called (Parameter properties). 
    constructor(public name: string, public species: string, public sound: string) { }

    makeSound() {
        console.log(`this ${this.name} says ${this.sound}`);
    }
}

const dog = new Animal('German Shepard', 'dog', 'Ghew Ghew');
const cat = new Animal('Persian', 'cat', 'meaw meaw');

dog.makeSound();
cat.makeSound();