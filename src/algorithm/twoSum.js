
// function twoSum(nums, target) {
//   for(var i = 0; i< nums.length - 1; i++) {
//     for(var j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j]
//       }
//     }
//   }
// };
function twoSum(nums, target) {
  var map = new Map()
  for (var i = 0; i< nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i]
    }
    map.set(nums[i], i)
  }
}