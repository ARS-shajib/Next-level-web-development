const add = (param1: number, param2: number): number => {
    return param1 + param2;
}
const avg = (param1: number, param2: number): number => {
    return (param1 + param2) / 2;
}
const sub = (param1: number, param2: number): number => {
    return (param1 - param2);
}
export default {
    add,
    sub,
    avg,
};