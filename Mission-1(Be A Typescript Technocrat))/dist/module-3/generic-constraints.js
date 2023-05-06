"use strict";
//ekhane extends keyword er mane holo MandatoryInterface er property gulo must T er modhe thakte hobe sathe extra property optional. etai contraints in generic.
const addMe1 = (myInfo) => {
    const crush = 'dilara yasmin';
    const newData = Object.assign(Object.assign({}, myInfo), { crush });
    return newData;
};
const myInfo1 = {
    name: 'Abdur Rahman',
    age: 30,
    salary: 100000,
};
const yourInfo = {
    name: 'Abdur Rahman shajib',
    age: 30,
    salary: 100000,
    other: 'dirty',
};
const result5 = addMe1(myInfo1);
const result6 = addMe1(yourInfo);
console.log(result5);
console.log(result6);
function getProperty(obj, key) {
    return obj[key];
}
const property = getProperty({ name: 'Abdur Rahman', age: 100 }, 'name');
console.log(property);
