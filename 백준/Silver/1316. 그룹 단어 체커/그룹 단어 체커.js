// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// let input = fs.readFileSync(filePath).toString().trim().split("\n");

// solution(input);
// function solution(input) {
//   const N = Number(input[0]);
//   const words = input.slice(1);
//   let countGroupWords = 0;
//   const eachWord = words.map((word) => word.split(""));
//   console.log(eachWord);
//   for(let i =0; i<eachWord.length; i++){
//     for(let j =0; j<eachWord[i].length; j++){
//       eachWord[i].map((targetC)=> targetC[j] !== targetC[j+1])

//     }
//   }
// }

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);

function isGroupWord(word) {
  const visited = new Set();
  let prevChar = null;
  for (let i = 0; i < word.length; i++) {
    const currentChar = word[i];
    if (prevChar !== currentChar && visited.has(currentChar)) {
      return false;
    }
    visited.add(currentChar);
    prevChar = currentChar;
  }
  return true;
}

function solution(input) {
  const N = Number(input[0]);
  const words = input.slice(1);
  let countGroupWords = 0;

  for (let i = 0; i < N; i++) {
    if (isGroupWord(words[i])) {
      countGroupWords++;
    }
  }
  console.log(countGroupWords);
}
