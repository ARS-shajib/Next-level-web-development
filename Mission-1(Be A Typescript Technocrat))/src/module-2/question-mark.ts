// tarnary operator

const age: number = 15;

const isAdult = age >= 18 ? 'yes' : 'no';

console.log(isAdult);

// nullish coeslancing operator
// it's work at undefined and null
const isAuthenticatedUser = "";
const isAuthenticatedUser1 = undefined;
const userName = isAuthenticatedUser ?? 'Guest';
const userName1 = isAuthenticatedUser ? isAuthenticatedUser : 'Guest';
const userName2 = isAuthenticatedUser1 ?? 'Guest';

console.log({ userName }, { userName1 }, { userName2 });

type Manush = {
    name: string;
    age: number;
    address: {
        city: 'No City';
        road: 'No Road';
        home?: "SUI hall";
    };
};

const manush1: Manush = {
    name: 'Abdur Rahman',
    age: 24,
    address: {
        city: 'No City',
        road: 'No Road',
    },
};
const manush2: Manush = {
    name: 'Abdur Rahman',
    age: 24,
    address: {
        city: 'No City',
        road: 'No Road',
        home: 'SUI hall',
    },
};

const home = manush1?.address?.home ?? 'No Home';
const home1 = manush2?.address?.home ?? 'No Home';
console.log({ home }, { home1 });