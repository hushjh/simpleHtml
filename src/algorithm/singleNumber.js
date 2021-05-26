function singleNumber(nums) {
  let num = 0;
  let len = nums.length
  for(var i = len - 1 ; i >= 0; i--) {
      let arr = nums.slice();
      num = arr.splice(i, 1)[0];
      if ((len - 1) / 2 === [...new Set(arr)].length) {
          // 去掉的元素 刚好是只出现一次的元素
          return num;
      }
  }
  // var result = 0;
  // for (var i = 0; i < nums.length; i++) {
  //     result ^= nums[i];
  // }
  // return result;
};