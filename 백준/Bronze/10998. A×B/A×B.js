const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
readline
  .on("line", function (line) {
    input = line.split(" ").map((el) => parseInt(el));
  })
  .on("close", function () {
    const [A,B] = input;
    console.log(A*B);
    process.exit();
  });