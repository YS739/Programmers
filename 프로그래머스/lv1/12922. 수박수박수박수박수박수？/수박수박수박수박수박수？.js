function solution(n) {
    const strArr = ["수박","수"]
    const evenNum = n/2
    const oddNum = n%2
    
    return strArr[0].repeat(evenNum)+strArr[1].repeat(oddNum)

}



