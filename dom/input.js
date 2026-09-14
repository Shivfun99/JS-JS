const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split(/\s+/);

let idx = 0;

let n = Number(input[idx++]);
let s = input[idx++];

console.log(n);
console.log(s);