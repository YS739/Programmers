const solution=(n, m)=> {
    let answer = [];
    let divN = [];
    let divM = [];
    let gCD = 0;
    let lCM = 0;
    
// 최대공약수
for (let i = 1; i <= n && i <= m; i++) {
    if (n % i === 0 && m % i === 0) {
        gCD =i;
    }
}
    answer.push(gCD);
    
// 최소공배수
    lCM = (n*m)/gCD;
    answer.push(lCM);

    return answer;
}