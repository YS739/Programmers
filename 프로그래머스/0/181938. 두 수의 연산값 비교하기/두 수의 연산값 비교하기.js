function solution(a, b) {
    const aAddB = a.toString() + b.toString();
    const compareNum = 2 * a * b;
    return +aAddB >= compareNum ? +aAddB : compareNum 
}