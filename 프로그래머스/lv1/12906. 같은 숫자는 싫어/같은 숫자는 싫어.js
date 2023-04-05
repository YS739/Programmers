const solution = (arr) => {
  let newArr = [];
  newArr.push(arr[0]);
  for (let i = 0, j = 1; j < arr.length; i++, j++) {
    if (arr[i] !== arr[j]) {
      newArr.push(arr[j]);
    }
  }
  return newArr;
};