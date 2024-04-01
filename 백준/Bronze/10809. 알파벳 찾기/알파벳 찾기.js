const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const S = input[0];
  const answer = [];

  for (let i = 0; i < 26; i++) {
    const char = String.fromCharCode(97 + i); // 아스키 코드를 문자로 변환
    const index = S.indexOf(char);
    answer.push(index);
  }

  console.log(answer.join(" "));
}
