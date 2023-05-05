type noobDeveloper = {
    name: string;
};

type JuniorDeveloper = noobDeveloper & {
    expertise: string;
    experience: number;
};

type nextLevelDeveloper = JuniorDeveloper & {
    leadershipExperience: number;
    level: 'junior' | 'mid' | 'senior';
};


const newDeveloper: noobDeveloper | JuniorDeveloper = {
    name: 'Abdur Rahman',
    expertise: 'javascript',
    experience: 1,
}

const developer: nextLevelDeveloper = {
    name: 'shajib',
    expertise: 'Typescript',
    experience: 2,
    leadershipExperience: 1,
    level: 'senior',
}

console.log(developer);