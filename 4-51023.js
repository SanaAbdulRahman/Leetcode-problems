//XOR Operation in an Array

/* The code is defining a function called `xorOperation` that takes two parameters `n` and `start`. */
var xorOperation = function (n, start) {
  let numsArray = [];
  let result;
  for (let i = 0; i < n; i++) {
    numsArray.push(start + 2 * i);
  }
  for (let i = 0; i < numsArray.length; i++) {
    result ^= numsArray[i];
  }
  return result;
};
console.log(xorOperation(5, 0));
