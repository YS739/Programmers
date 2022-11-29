function solution(money) {
    var answer = [];
    const cup = Math.trunc(money / 5500);
    const coin = (money - 5500*cup);
    answer.push(cup, coin)
    return answer;
}