type CrushType = {
    name: string;
    age?: number;
    profession: string;
    address: string;
}

const crush1: CrushType = {
    name: 'Dilara Yasmin',
    age: 40,
    profession: 'cgpa',
    address: 'kustia',
}
const crush2: CrushType = {
    name: 'Disha',
    profession: 'house wife',
    address: 'dhaka',
}

type OperationType = (x: number, y: number) => number;

const calculate = (
    number1: number,    // 10
    number2: number,    // 20
    operation: OperationType    // (x, y) => x - y     (10,20)=> 10-20
) => {
    return operation(number1, number2);
};

const result = calculate(10, 20, (x, y) => x - y);
console.log(result);