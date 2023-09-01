const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    seperateStr = str.split('')
    answer = seperateStr.map((a)=> a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase())
    console.log(answer.join(''))
});