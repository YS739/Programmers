function solution(n) {
    let answer = 1;
    for(i=1; i<=10; i++){
answer*=i
    if(answer === n)return i;
            if(answer > n)return i-1;
    }
    

}