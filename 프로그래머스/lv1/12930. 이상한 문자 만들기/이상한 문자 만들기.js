function solution(s) {
    const splitS = s.split(' ')
    for(let i=0; i<splitS.length; i++){
        let newS = '';
        for(let j=0; j<splitS[i].length; j++){
            if(j%2 === 0){
               newS += splitS[i][j].toUpperCase() }
            else{
                newS += splitS[i][j].toLowerCase()
            }
        }
        splitS[i] = newS
    }

    return splitS.join(' ')
}