interface MandatoryInterface {
    name: string;
    age: number;
    salary: number;
}

//ekhane extends keyword er mane holo MandatoryInterface er property gulo must T er modhe thakte hobe sathe extra property optional. etai contraints in generic.

const addMe1 = <T extends MandatoryInterface>(myInfo: T) => {
    const crush = 'dilara yasmin';
    const newData = { ...myInfo, crush };
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