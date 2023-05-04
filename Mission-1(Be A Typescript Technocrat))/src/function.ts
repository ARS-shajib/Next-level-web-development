
const removeBalanceArrow = (num1: number, num2: number): number => num1 + num2;

const arr = [2, 3, 4, 5];
const newArr = arr.map((elem: number) => elem * elem);

const person: {
    name: string;
    balance: number;
    addBalance(money: number): number;
} = {
    name: 'Abdur Rahman',
    balance: 500,
    addBalance(money: number) {
        return this.balance + money;
    }
}

console.log(removeBalanceArrow(4, 5));
console.log(newArr);