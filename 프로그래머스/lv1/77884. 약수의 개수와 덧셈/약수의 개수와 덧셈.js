const solution=(left, right)=> {
    const numArr = []; // left~right 배열
    let divisionArr = []; // 각 정수의 약수를 담은 배열
    let plusNum = 0; // 약수가 짝수 일 때
    let minusNum = 0; // 약수가 홀수 일 때
    
    for(let i=left; i<=right; i++ ){
        numArr.push(i)
    }
    
    for(let i=0; i<numArr.length; i++){
        let division = [];
        for(let j=1; j<=numArr[i]; j++){
            if(numArr[i]%j === 0){
                division.push(j)
            }
        }
        divisionArr.push(division)
    }
    
    for(let i=0; i<divisionArr.length; i++){
        if(divisionArr[i].length%2 === 0){
            plusNum += divisionArr[i][divisionArr[i].length-1]
        }
        else{
            minusNum += -divisionArr[i][divisionArr[i].length-1]
        }
    }
    return plusNum + minusNum
}