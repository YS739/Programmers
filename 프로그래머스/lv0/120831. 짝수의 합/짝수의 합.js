function solution(n) {
    var sum = 0;    
    let a = n;
    for(a=1; a<=n; a++){
        if (a%2===0){
            sum += a;
        }  
    } return sum
}