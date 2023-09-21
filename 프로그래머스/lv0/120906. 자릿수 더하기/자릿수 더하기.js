function solution(n) {
    strN = n.toString()
    addStrN = strN.split('').reduce((a,b)=> parseInt(a) + parseInt(b), 0)
    return addStrN
}