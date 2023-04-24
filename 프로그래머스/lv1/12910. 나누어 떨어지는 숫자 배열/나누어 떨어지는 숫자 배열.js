function solution(arr, divisor) {
    let answer = [];
    const sortArr = arr.sort((a,b)=> a-b)
    for(let i=0; i<sortArr.length; i++){
        if(sortArr[i]%divisor === 0){
            answer.push(sortArr[i])
        }

    }
        if(answer.length === 0){
            answer.push(-1)
        }    
    return answer;
}