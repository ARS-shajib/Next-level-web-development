"use strict";
const crush1 = {
    name: 'Dilara Yasmin',
    age: 40,
    profession: 'cgpa',
    address: 'kustia',
};
const crush2 = {
    name: 'Disha',
    profession: 'house wife',
    address: 'dhaka',
};
const calculate = (number1, // 10
number2, // 20
operation // (x, y) => x - y     (10,20)=> 10-20
) => {
    return operation(number1, number2);
};
const result = calculate(10, 20, (x, y) => x - y);
console.log(result);
