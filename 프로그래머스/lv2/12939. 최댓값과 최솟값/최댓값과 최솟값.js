const solution = (s) => {
  let answer = "";
  const test = s.split(" ").sort((a, b) => a - b);
  answer = test[0] + " " + test[test.length - 1];
  return answer;
};
