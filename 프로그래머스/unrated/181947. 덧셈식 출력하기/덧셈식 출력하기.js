const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    const numA = Number(input[0])
    const numB = Number(input[1])
    console.log(`${numA} + ${numB} = ${numA + numB} `);
});