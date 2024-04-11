const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  const N = Number(input[0]);
  const works = input.slice(1).map((work) => {
    const [deadLine, workScore] = work.split(" ").map(Number);
    return { deadLine, workScore };
  });
  const sortedHighScore = works.sort((a, b) => b.workScore - a.workScore);
  const workedList = Array.from({ length: N + 1 });

  sortedHighScore.forEach((e) => {
    for (let i = e.deadLine; i > 0; i--) {
      if (workedList[i] === undefined) {
        workedList[i] = e.workScore;
        break;
      }
    }
  });

  const totalWorkScore = workedList.reduce((acc, curr) => {
    if (typeof curr === "number") {
      return acc + curr;
    } else {
      return acc;
    }
  }, 0);

  console.log(totalWorkScore);
}
