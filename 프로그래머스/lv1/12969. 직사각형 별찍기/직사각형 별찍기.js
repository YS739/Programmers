process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]); // a = n, b = m
    let pattern = "*".repeat(a) + "\n";
    let result = pattern.repeat(b);
    console.log(result);
});