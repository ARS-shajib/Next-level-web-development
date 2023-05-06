// Generic Interface

interface CrushInterface<T, U = null> {
    name: string;
    husband: T;
    wife?: U;
}

const crush3: CrushInterface<boolean> = { name: 'Dilara Yasmin', husband: false };
const crush4: CrushInterface<string> = { name: 'Disha', husband: 'Abdur Rahman' };


interface HusbandInterface {
    name: string;
    salary: number;
}

const crush5: CrushInterface<HusbandInterface> = {
    name: 'Dilara Yasmin disha',
    husband: {
        name: 'Abdur Rahman Shajib',
        salary: 5000
    }
}

interface PersonInterface {
    name: string;
    age: number;
}

const crush6: CrushInterface<PersonInterface, PersonInterface> = {
    name: 'dilara yasmin',
    husband: {
        name: 'Abdur Rahman',
        age: 60,
    },
    wife: {
        name: 'disha',
        age: 59
    }
}