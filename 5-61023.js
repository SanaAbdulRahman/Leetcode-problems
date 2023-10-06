//Can Make Arithmetic Progression From Sequence
const canMakeArithmeticProgression = function (arr) {
  const sortedArr = arr.sort((x, y) => x - y);
  const result = sortedArr[0] - sortedArr[1];

  for (let i = 1; i < sortedArr.length - 1; i++) {
    let diff = sortedArr[i] - sortedArr[i + 1];
    if (result != diff) {
      return false;
    }
  }
  return true;
};
const array = [3, 5, 1];
console.log(canMakeArithmeticProgression(array));
