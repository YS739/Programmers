const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const diceNum = input[0].split(" ").map(Number);
  const sortedDiceNum = diceNum.sort((a, b) => b - a);
  let count = 1;
  let number = sortedDiceNum[0];

  if (sortedDiceNum[0] === sortedDiceNum[1]) {
    count++;
    number = sortedDiceNum[0];
  }

  if (sortedDiceNum[1] === sortedDiceNum[2]) {
    count++;
    number = sortedDiceNum[1];
  }

  switch (count) {
    case 3:
      console.log(10000 + number * 1000);
      break;
    case 2:
      console.log(1000 + number * 100);
      break;
    default:
      console.log(number * 100);
      break;
  }
}
