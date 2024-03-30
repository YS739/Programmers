const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);

function solution(input) {
  const [n] = input[0].split(" ").map(Number);
  const s = new Set(input.slice(1, n + 1));
  const words = input.slice(n + 1);
  let countWord = 0;

  for (let i = 0; i < words.length; i++) {
    if (s.has(words[i])) {
      countWord++;
    }
  }
  console.log(countWord);
}