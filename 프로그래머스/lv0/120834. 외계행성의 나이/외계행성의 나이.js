function solution(age) {
    var answer = '';
    let alphabet = ['a','b','c','d','e','f','g','h','i','j'];
let arrAge = [...String(age)]
    for(let i=0; i<arrAge.length; i++){
         answer += alphabet[Number(arrAge[i])]
    }

    return answer;
}