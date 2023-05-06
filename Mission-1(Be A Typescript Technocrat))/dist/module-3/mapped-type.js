"use strict";
const arrayOfNumbers = [1, 2, 3];
const arrayOfStrings = arrayOfNumbers.map((number) => number.toString());
console.log(arrayOfStrings);
const area1 = { height: 20, width: 20 };
// area1.height=18; cann't change value Cz read-only property
