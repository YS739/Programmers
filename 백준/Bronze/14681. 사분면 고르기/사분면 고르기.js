const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let input = [];
rl.on('line', function (line) {
  input.push(line)
})
  .on('close', function () {
    const [A, B] = input;

    switch (true) {
      case A > 0 && B > 0:
        console.log(1);
        break;
      case A < 0 && B > 0:
        console.log(2);
        break;
      case A < 0 && B < 0:
        console.log(3);
        break;
      case A > 0 && B < 0:
        console.log(4);
        break;
      default:
        console.log(
          "Neither A nor B is strictly positive or strictly negative"
        );
    }
  process.exit();
});