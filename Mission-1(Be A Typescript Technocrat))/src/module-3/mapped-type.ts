const arrayOfNumbers = [1, 2, 3];
const arrayOfStrings = arrayOfNumbers.map((number) => number.toString());
console.log(arrayOfStrings);

type AreaNumber = {
    height: number;
    width: number;
};

type A = AreaNumber['height'] // look up types

type Volume = {
    height: number;
    width: string;
    depth: number;
};

type Area<T> = {
    // [key in keyof Volume]: Volume[key];
    readonly [key in keyof T]: T[key];
}

const area1: Area<{ height: number, width: number }> = { height: 20, width: 20 };

// area1.height=18; cann't change value Cz read-only property