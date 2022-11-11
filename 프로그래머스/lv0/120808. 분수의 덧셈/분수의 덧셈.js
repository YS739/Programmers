function solution(denum1, num1, denum2, num2) {
    const denum = denum1*num2 + denum2*num1;
    const num = num1*num2;
    let miniNumber;
    if ( denum < num){
        miniNumber = denum;
    }
    else{
        miniNumber = num;
    }
   while(true){ 
    if(denum % miniNumber === 0) {
        if(num % miniNumber === 0){
            return [denum / miniNumber, num / miniNumber];
        }
            }
    miniNumber = miniNumber -1;}
    
  

    
    return denum, num
}