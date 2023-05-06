//--------single parameter---------------------

type GenericArray<T> = Array<T>

const rollNumbers1: GenericArray<number> = [44, 12, 4];
const rollNumbers2: GenericArray<string> = ["44", "12", "4"];
const rollNumbers3: GenericArray<boolean> = [true, false];


type NameRollType = { name: string, roll: number };

const userIdentity: GenericArray<NameRollType> = [
    {
        name: 'Abdur Rahman',
        roll: 1703025,
    },
    {
        name: 'dilara yasmin',
        roll: 1703020,
    }
]

//---------multiple parameter-------------------

type GenericTuple<X, Y> = [X, Y];

const relation: GenericTuple<string, string> = ["Abdur Rahman", "dilara yasmin disha"];

interface RelationWithSalaryInterface {
    name: string;
    salary: number;
}

const relationWithSalary: GenericTuple<RelationWithSalaryInterface, string> = [
    {
        name: 'Abdur Rahman',
        salary: 5000,
    },
    'dilara yasmin disha',
];
