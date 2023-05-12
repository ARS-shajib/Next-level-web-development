// Pick

interface Person3 {
    name: string;
    email?: string;
    contactNo: string;
}

// ekhane Contact er type = Person1 er email er type banano hocce (Pick) use kore. Pick er first parameter hobe kon interface er property er type nite chai and then property name/names second parameter hishebe.

type Contact = Pick<Person3, "email" | "contactNo">;

// Omit
// Pick er opposite
type Contact2 = Omit<Person3, "email">;


// Partial and Required

// To make all the properties be optional type

type Optional = Partial<Person3>;
type RequiredProps = Required<Person3>;

const person4: Readonly<Person3> = { //person4 er property gulo change kora jabe na.
    name: "Abdur Rahman",
    email: "abc@gmail.com",
    contactNo: "1222234",
}


// type myObj={
//     a:string,
//     b:string,
//     c:string,
// }
// ---------------Record Utility Type----------------

//using index signature
// type myObj = {
//     [key: string]: string;
// }

// Record 
type myObj = Record<string, string>

const obj: myObj = {
    a: "1",
    b: "2",
    c: "3",
    d: "4",
}
// literal use korte chaile I mean key hishebe shudhu a,b,c thakbe
type myObj1 = Record<'a' | 'b' | 'c', string>

const obj1: myObj1 = {
    a: "1",
    b: "2",
    c: "3",
}