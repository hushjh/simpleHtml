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
function intersect(nums1, nums2) {
  var res = []
  nums1.sort((a, b) => a-b)
  nums2.sort((a, b) => a-b)
  for(var i = 0, j = 0; i < nums1.length && j < nums2.length;) {
    if (nums1[i] === nums2[j]) {
      res.push(nums1[i]);
      i++, j++;
    } else if (nums1[i] > nums2[j]) {
      j++;
    } else {
      i++
    }
  }
  return res;
}