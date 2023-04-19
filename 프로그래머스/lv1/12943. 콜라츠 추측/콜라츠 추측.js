function solution(num) {
    let newNum = 0;
    let newNumArr = [];
    if(num === 1){
        return 0
    }
    if(num%2 === 0){
            newNum = num/2
            newNumArr.push(newNum)
        }
        else{
            newNum = (num*3)+1
            newNumArr.push(newNum)
        }
    let i = 0;

    do{
        if(newNumArr[i]%2 === 0){
            newNum = newNumArr[i]/2
            newNumArr.push(newNum)
            i++
        }
        else{
            newNum = (newNumArr[i]*3)+1
            newNumArr.push(newNum)
            i++
        }
    }while(newNumArr[newNumArr.length-1] !== 1)
        
        if(i > 500){
            return -1
        }
    else{
                return i+1
}


}