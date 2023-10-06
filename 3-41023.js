/**Fnal prices with a special discount in a shop
 */
var finalPrices = function (prices) {
  //monotonic stack method
  const stack = [];
  const result = [];
  for (let i = prices.length - 1; i >= 0; i -= 1) {
    while (stack.length && stack[stack.length - 1] > prices[i]) {
      stack.pop();
    }
    result[i] =
      stack.length === 0 ? prices[i] : prices[i] - stack[stack.length - 1];
    stack.push(prices[i]);
  }
  return result;
};
let prces = [8, 4, 6, 2, 3];
const fp = finalPrices(prces);
console.log(fp);
