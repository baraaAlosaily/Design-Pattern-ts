import Value from "./value";
import Add from "./add";
import Sub from "./sub";

const A=Value(1);
const B=Value(2);
const C=Value(3);

console.log(Add(A,B).value);
console.log(Add(A,100).value);
console.log(Add(1000,Sub(20,Add(32,C))).value);
