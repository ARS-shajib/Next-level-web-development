"use strict";
// tarnary operator
var _a, _b, _c, _d;
const age = 15;
const isAdult = age >= 18 ? 'yes' : 'no';
console.log(isAdult);
// nullish coeslancing operator
// it's work at undefined and null
const isAuthenticatedUser = "";
const isAuthenticatedUser1 = undefined;
const userName = isAuthenticatedUser !== null && isAuthenticatedUser !== void 0 ? isAuthenticatedUser : 'Guest';
const userName1 = isAuthenticatedUser ? isAuthenticatedUser : 'Guest';
const userName2 = isAuthenticatedUser1 !== null && isAuthenticatedUser1 !== void 0 ? isAuthenticatedUser1 : 'Guest';
console.log({ userName }, { userName1 }, { userName2 });
const manush1 = {
    name: 'Abdur Rahman',
    age: 24,
    address: {
        city: 'No City',
        road: 'No Road',
    },
};
const manush2 = {
    name: 'Abdur Rahman',
    age: 24,
    address: {
        city: 'No City',
        road: 'No Road',
        home: 'SUI hall',
    },
};
const home = (_b = (_a = manush1 === null || manush1 === void 0 ? void 0 : manush1.address) === null || _a === void 0 ? void 0 : _a.home) !== null && _b !== void 0 ? _b : 'No Home';
const home1 = (_d = (_c = manush2 === null || manush2 === void 0 ? void 0 : manush2.address) === null || _c === void 0 ? void 0 : _c.home) !== null && _d !== void 0 ? _d : 'No Home';
console.log({ home }, { home1 });
