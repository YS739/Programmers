function solution(n)
{
    var answer = String(n).split('').reduce((acc, cur)=>(acc+cur*1),0)


    return answer;
}