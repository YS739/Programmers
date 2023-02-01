function solution(n) {
    var answer = [];
    let a = String(n).split("")
    for(let i=1; i<=a.length; i++){
       answer.push(+a[a.length-i])
    }
    return answer;
}