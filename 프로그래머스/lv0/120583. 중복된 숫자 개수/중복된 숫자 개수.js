function solution(array, n) {
    var count = 0;
    for(i=0; i<=array.length; i++ ){
        if (array[i] === n){
            count++ }
    }
    return count;
}