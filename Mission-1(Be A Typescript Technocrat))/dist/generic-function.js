"use strict";
const createArray = (param) => {
    return [param];
};
const createArray1 = (param1, param2) => {
    return [param1, param2];
};
const result1 = createArray('Bangladesh');
const result2 = createArray1(true, ['abdur', 'rahman']);
const result3 = createArray({ name: 'Bangladesh' });
// spread operator
// const newData = {...myInfo,crush};
const addMe = (myInfo) => {
    const crush = 'dilara yasmin';
    const newData = Object.assign(Object.assign({}, myInfo), { crush });
    return newData;
};
const myInfo = {
    name: 'Abdur Rahman',
    age: 30,
    salary: 100000,
};
const result4 = addMe(myInfo);
console.log(result4);
