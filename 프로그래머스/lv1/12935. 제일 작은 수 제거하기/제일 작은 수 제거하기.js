const solution=(arr)=>{
    let answer = [];
    if(arr.length === 1){
        answer.push(-1)
    }
    else{
        const minNum = arr.find((num)=> num === Math.min(...arr))
        const removeMinNum = arr.filter((num)=> num !== minNum)
        answer = removeMinNum
    }
    return answer
}