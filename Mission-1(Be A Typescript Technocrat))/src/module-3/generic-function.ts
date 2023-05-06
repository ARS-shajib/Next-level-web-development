const createArray = <T>(param: T): T[] => {
    return [param];
}
//-------Arrow function-------
const createArray1 = <X, Y>(param1: X, param2: Y): [X, Y] => {
    return [param1, param2];
}
//------normal function-------
function createArray2<X, Y>(param1: X, param2: Y): [X, Y] {
    return [param1, param2];
}

const result1 = createArray<string>('Bangladesh');
const result2 = createArray1<boolean, Array<string>>(true, ['abdur', 'rahman']);

type Name = {
    name: string;
}

const result3 = createArray<Name>({ name: 'Bangladesh' });


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

const addMe = <T>(myInfo: T) => {
    const crush = 'dilara yasmin';
    const newData = { ...myInfo, crush };
    return newData;
};

const myInfo = {
    name: 'Abdur Rahman',
    age: 30,
    salary: 100000,
};

const result4 = addMe(myInfo);
console.log(result4);