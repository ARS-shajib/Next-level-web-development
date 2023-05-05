let emni: any;

emni = "next level web development";

const len = (emni as string).length;

type CustomErrorType = {
    message: string;
}

try {

} catch (err) {
    console.log((err as CustomErrorType).message);
}