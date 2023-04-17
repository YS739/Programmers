function solution(a, b) {
    let sumAtoB = 0;
        if(a<b){
             for(let i=a; i<=b; i++){
            sumAtoB += i
            
        }
        }
        else{
             for(let i=b; i<=a; i++){
            sumAtoB += i
            
        }
        }
    
    return sumAtoB
}