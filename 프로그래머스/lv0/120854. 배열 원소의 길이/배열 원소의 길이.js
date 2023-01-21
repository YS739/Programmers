function solution(strlist) {
    var answer = [];
    for(let i=0; i<strlist.length; i++){
        let b = strlist[i].slice("")
        answer.push(b.length)       
    }
    return answer;
}