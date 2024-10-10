var findMin = function (arr) {
    let low = 0,
      high = arr.length - 1;
    let ans = Infinity;
  
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
  
      // Check for duplicates case
      if (arr[low] === arr[mid] && arr[mid] === arr[high]) {
        ans = Math.min(ans, arr[low]);
        low++;
        high--;
      } else if (arr[low] <= arr[mid]) {
        // Left half is sorted
        ans = Math.min(ans, arr[low]);
        low = mid + 1;
      } else {
        // Right half is sorted
        ans = Math.min(ans, arr[mid]);
        high = mid - 1;
      }
    }
    return ans;
  };
  
  let arr = [0, 4, 5, 6, 7, -1, 1, 2, 3, 0];
  let ans = findMin(arr);
  console.log("The minimum element is: " + ans);
  