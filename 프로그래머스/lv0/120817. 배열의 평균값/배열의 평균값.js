function solution(numbers) {
 const a = numbers.reduce(function add(sum, currValue){
     return sum + currValue;
 },0);
 
const b = a/numbers.length;

const c = b.toFixed(1)
    
return c

}