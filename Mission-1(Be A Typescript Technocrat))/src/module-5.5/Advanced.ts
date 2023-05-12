
interface Model<IData, IMethods> {
    data: IData,
    methods: IMethods
}

// Properties

interface IUser1 {
    firstName: string;
    lastName: string;
}

// Methods
interface IMethods {
    fullName(): string;
}

type model = Model<IUser1, IMethods>;

class User1 implements model {
    data: IUser1;
    methods: IMethods;

    constructor(firstName: string, lastName: string) {
        this.data = { firstName, lastName };
        this.methods = {
            fullName: () => `${firstName} ${lastName}`,
        };
    }
}

const user3 = new User1('Abdur Rahman', 'Shajib');
console.log(user3.methods.fullName());