function solution(n) {
    var answer = [];
    for(let x=1; x<n; x++){
        if(n%x === 1)
            answer.push(x)
        if(answer.length===1){
            return  answer[0]
        }else{answer[answer.length-1]}

    }
    return answer;
}