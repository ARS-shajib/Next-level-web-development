// abstraction by interface

interface IVehicle {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
}

class Vehicle implements IVehicle {
    // parameter properties
    constructor(
        public name: string,
        public brand: string,
        public model: number
    ) { }

    startEngine(): void {
        console.log('I am starting engine...');
    }
    stopEngine(): void {
        console.log('I am stopping engine...');
    }
    move(): void {
        console.log('I am moving...');
    }
    test(): void {
        console.log('I am testing purpose...');
    }
}

const vehicle1 = new Vehicle('car', 'Toyota', 2000);


// abstraction by abstract class


abstract class Vehicle1 {
    // parameter properties
    constructor(
        public name: string,
        public brand: string,
        public model: number
    ) { }

    abstract startEngine(): void;
    abstract stopEngine(): void;
    move(): void {
        console.log('I am moving...');
    }
    test(): void {
        console.log('I am testing purpose...');
    }
}

// const car = new Vehicle1('car','honda',2015); abstract class er instance create kora jai na. extends kora jai...

class Car extends Vehicle {
    startEngine(): void {
        console.log('I am starting engine...');
    }
    stopEngine(): void {
        console.log('I am stoping engine...');
    }
}

const car = new Car('car', 'honda', 2015);