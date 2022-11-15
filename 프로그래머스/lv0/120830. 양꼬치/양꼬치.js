function solution(n, k) {
    let price = (12000*n) + 2000*(k-Math.floor(n/10))
    return price;
}