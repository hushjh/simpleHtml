var row = {};
var column = {};
var grid = {};
function isValidSudoku(board) {
  let outerLen = board.length;
  let innerLen = board[0].length;
  for (let i = 0; i < outerLen; i++) {
    for (let j = 0; j < innerLen; j++) {
      if (!isNaN(board[i][j]) && collectRowAndJudge(board[i][j], i)) {
        console.log("row:", row)
        return false;
      }
      if (!isNaN(board[i][j]) && collectColumnAndJudge(board[i][j], j)) {
        console.log("column:", column)
        return false;
      }
      if (!isNaN(board[i][j]) && collectGridAndJudge(board[i][j], i, j)) {
        console.log("grid:", grid)
        return false;
      }
    }
  }
  console.log("row:", row)
  console.log("column:", column)
  console.log("grid:", grid)
  row = {};
  column = {};
  grid = {};
  return true
}
function collectRowAndJudge(item, index) {
  if (row[index]) {
    row[index].push(item);
  } else {
    row[index] = [item];
  }
  if (hasSame(row[index])) {
    return true;
  } else {
    return false;
  }
}
function collectColumnAndJudge(item, index) {
  if (column[index]) {
    column[index].push(item);
  } else {
    column[index] = [item];
  }
  if (hasSame(column[index])) {
    return true;
  } else {
    return false;
  }
}
function collectGridAndJudge(item, indexI, indexJ) {
  let index = getGridIndex(indexI, indexJ);
  if (grid[index]) {
    grid[index].push(item);
  } else {
    grid[index] = [item];
  }
  if (hasSame(grid[index])) {
    return true;
  } else {
    return false;
  }
}
function getGridIndex(i, j) {
  return Math.floor(i / 3) + "" + Math.floor(j / 3);
}
function hasSame(arr) {
  if (arr.length !== [...new Set(arr)].length) {
    row = {};
    column = {};
    grid = {};
    return true;
} else {
    return false;
}
}

// function moveZeroes(nums) {
//   let len = nums.length
//   for (var i = len - 1; i >= 0; i--) {
//     if (nums[i] === 0) {
//       if (i !== len - 1) {
//         nums.splice(i, 1);
//         nums.push(0)
//       }
//     }
//   }
// }

// function plusOne(digits) {
//   let len = digits.length;
//   let arr = digits.slice();
//   for (var i = len - 1; i >= 0; ) {
//     arr[i]++
//     if (arr[i] === 10) {
//       if (i === 0) {
//         arr[i] = 0;
//         arr.unshift(1);
//         // 到第一个元素了
//         return arr;
//       } else {
//         arr[i] = 0
//         i--;
//       }
//     } else {
//       // 加1之后不需要进1
//       return arr;
//     }
//   }
// }

// function plusOne(digits) {
//   // 此方法有缺陷，当数组里的数字大于Number.MAX_SAFE_INTEGER，就会出问题
//   let len = digits.length;
//   let num = 0;
//   let arr = [];
//   for (var i = 0; i < len; i++) {
//     num = num * 10 + digits[i];
//   }
//   debugger;
//   num++
//   while(num > 0) {
//     let module = num % 10;
//     num = Math.floor(num / 10);
//     arr.unshift(module);
//   }
//   return arr;
// }

// function intersect(nums1, nums2) {
//   var map1 = getMap(nums1);
//   var map2 = getMap(nums2);
//   var res = [];

//   for (let [key, v1] of map1.entries()) {
//     if (map2.has(key)) {
//       let v2 = map2.get(key)
//       if (v1 >= v2) {
//         res = [...res, ...setArray(key, v2)]
//       } else {
//         res = [...res, ...setArray(key, v1)]
//       }
//     }
//   }
//   return res;
// };

// function setArray(value, times) {
//   let arr = [];
//   for(var i = 0; i < times; i++) {
//     arr.push(value)
//   }
//   return arr;
// }

// function intersect(nums1, nums2) {
//   var map = getMap(nums1);
//   var res = [];
//   for (var i = 0; i < nums2.length; i++) {
//     let key = nums2[i];
//     if (map.has(key) && map.get(key) > 0) {
//       res.push(key);
//       map.set(key, map.get(key) - 1)
//     }
//   }
//   return res;
// }
// function getMap(arr) {
//   var map = new Map();
//   for(var i = 0; i< arr.length; i++) {
//     let key = arr[i]
//     if (map.has(key)) {
//       map.set(key, map.get(key) + 1)
//     } else {
//       map.set(key, 1)
//     }
//   }
//   return map
// }

// 排序后，移动指针
// function intersect(nums1, nums2) {
//   var res = []
//   nums1.sort((a, b) => a-b)
//   nums2.sort((a, b) => a-b)
//   for(var i = 0, j = 0; i < nums1.length && j < nums2.length;) {
//     if (nums1[i] === nums2[j]) {
//       res.push(nums1[i]);
//       i++, j++;
//     } else if (nums1[i] > nums2[j]) {
//       j++;
//     } else {
//       i++
//     }
//   }
//   return res;
// }