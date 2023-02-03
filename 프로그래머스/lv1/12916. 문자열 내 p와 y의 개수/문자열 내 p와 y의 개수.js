function solution(s){
 let p = 0
 let y = 0;
    let lowerS = s.toLowerCase();
    for(let i=0; i<lowerS.length; i++){
        if(lowerS[i] === 'p'){
            p++
        }
        else if(lowerS[i] === 'y'){
            y++
        }
    } return p===y ? true : false
}