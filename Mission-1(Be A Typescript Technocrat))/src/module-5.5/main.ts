// "export" "import" use na korle ekhane add function (same name e) dui jaigai(main.ts&module.ts) use korte partam na.

import methods from "./module";
import * as Methods from "./wild-card-import"; // this is called Wildcard import

const add = (param1: number, param2: number, param3: number): number => {
    return param1 + param2 + param3;
};

const res = methods.avg(4, 6);
const res1 = Methods.add(5, 6);
const res2 = methods.sub(6, 8);
console.log(res, res1, res2, Methods.multiply(7, 8));