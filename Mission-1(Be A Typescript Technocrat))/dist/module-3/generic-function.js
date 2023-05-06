"use strict";
const createArray = (param) => {
    return [param];
};
//-------Arrow function-------
const createArray1 = (param1, param2) => {
    return [param1, param2];
};
//------normal function-------
function createArray2(param1, param2) {
    return [param1, param2];
}
const result1 = createArray('Bangladesh');
const result2 = createArray1(true, ['abdur', 'rahman']);
const result3 = createArray({ name: 'Bangladesh' });
//-----------spread operator---------------
// const newData = {...myInfo,crush};
// const addMe = (myInfo: Object) => {
//     const crush = 'dilara yasmin';
//     const newData = { ...myInfo, crush };
//     return newData;
// };
// If we use 'Object' type instead of 'T' then it will spread in compile time.
// so, if we mouse hover in result4 we cann't see property of myInfo.
// but, For using 'T'(generic type) now, if we mouse hover in result4
// we can see property of myInfo. that's a advantage of generic type.
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
