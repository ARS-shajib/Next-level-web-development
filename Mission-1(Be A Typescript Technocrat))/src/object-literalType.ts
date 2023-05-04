const user1: {
    company: "programming hero"; //literal type
    course: "level1" | "level2" | "both"; //literal type
    readonly name: string;
    age: number;
    isMarried: boolean;
    wife?: string;
} = {
    company: "programming hero",
    course: "both",
    name: 'Abdur Rahman',
    age: 24,
    isMarried: false,
}

//user1.name = 'shajib'; // show error Cz readonly property.