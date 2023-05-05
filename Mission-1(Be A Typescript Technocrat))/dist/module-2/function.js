"use strict";
const removeBalanceArrow = (num1, num2) => num1 + num2;
const arr = [2, 3, 4, 5];
const newArr = arr.map((elem) => elem * elem);
const person = {
    name: 'Abdur Rahman',
    balance: 500,
    addBalance(money) {
        return this.balance + money;
    }
};
console.log(removeBalanceArrow(4, 5));
console.log(newArr);
