// 2441. Largest Positive Integer That Exists With Its Negativ
var findMaxk = function (nums) {
    let set = new Set(nums);
    let result = -1;

    for (const num of nums) {
        if (set.has(-num)) {
            result = Math.max(num, result)
        }
    }
    return result;

}

//const nums = [-10, 8, 6, 7, -2, -3];
const nums = [-1, 2, -3, 3];

console.log(findMaxk(nums));