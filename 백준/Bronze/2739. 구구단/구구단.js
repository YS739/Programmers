const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const N = Number(input[0]);
  for (let i = 1; i <= 9; i++) {
    console.log(`${N} * ${i} = ${N * i}`);
  }
}
