const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);

function solution(input) {
  const [A, B] = input[0].split(" ").map(Number);
  console.log(A + B);
  console.log(A - B);
  console.log(A * B);
  console.log(Math.trunc(A / B));
  console.log(A % B);
}
