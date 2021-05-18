// 二分法查找
function binarySearch(arr, num) {
  let low = 0
  let high = arr.length - 1
  while (low <= high) {
    // 元素遍历完， 或者 找到了匹配的元素 则停止遍历
    let mid = low + Math.floor((high - low) / 2)
    if (arr[mid] === num) {
     return mid
    } else if (arr[mid] > num) {
      high = mid - 1
    } else if(arr[mid] < num) {
      low = mid + 1
    }
  }
}