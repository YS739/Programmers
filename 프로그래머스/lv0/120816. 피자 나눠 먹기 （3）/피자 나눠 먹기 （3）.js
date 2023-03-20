function solution(slice, n) {
    let answer = 0;
    if(slice<n){
        answer = Math.ceil(n/slice)
    }
    else{
     answer = 1
    }
return answer
}