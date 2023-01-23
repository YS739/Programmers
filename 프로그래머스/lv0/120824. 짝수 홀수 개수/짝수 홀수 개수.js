function solution(num_list) {
    var answer = [];
    let even = [];
    let odd = [];
    for(n of num_list){
        if(n%2 === 0){
            even.push(n)

        }
        else{
            odd.push(n)
        }
    }answer.push(even.length, odd.length)
    return answer;
}