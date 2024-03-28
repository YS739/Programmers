function solution(a, b) {
    const aAddB = a.toString() + b.toString();
    const bAddA = b.toString() + a.toString();
    return aAddB >= bAddA ? +aAddB : +bAddA 
}