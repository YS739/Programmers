function solution(n) {
    let checkN = Math.sqrt(n) 
    if(Number.isInteger(checkN) === true){
        return (checkN+1)**2
    }
    else{
        return -1
    }
}