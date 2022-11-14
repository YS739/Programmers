function solution(n) {
    var answer = [];
    let num = 1;
    while(num<=n){
        if(num % 2 === 1){
            answer.push(num);
        }num = num + 1
    }return answer
        }
