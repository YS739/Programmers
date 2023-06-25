const solution=(arr1, arr2)=>{
    let answer = [];
    for(let i=0; i<arr1.length; i++){
      const innerArray1 = arr1[i];
      const innerArray2 = arr2[i];
      const sumArray = [];
      for (let j = 0; j < innerArray1.length; j++) {
      const sum = innerArray1[j] + innerArray2[j];
      sumArray.push(sum);
    }
        answer.push(sumArray);
}
    return answer
}