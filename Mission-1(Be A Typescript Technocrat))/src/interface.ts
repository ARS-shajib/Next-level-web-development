//----------------Object--------------

type User = {
    name: string;
    age: number;
}

type ExtendedUser = User & {
    role: string;
}

interface IUser {
    name: string;
    age: number;
}

interface IExtendedUser extends IUser {
    role: string;
}

const user2: IExtendedUser = {
    name: 'Abdur Rahman',
    age: 24,
    role: 'junior software developer',
}


//-----------Function--------------------

type addNumbersType = (num1: number, num2: number) => number;

interface IAddNumbers {
    (num1: number, num2: number): number;
}

const addNumbers: addNumbersType = (num1, num2) => num1 + num2;

//-----------Array------------------------

type rollNumbersType = number[];

interface IRollNumbers {
    [index: number]: string;
}

const rollNumbers: IRollNumbers = ['1', '2', '4'];
