// var sortColors = function (nums) {
//   let count0 = 0;
//   let count1 = 0;
//   let count2 = 0;
//   for (let i = 0; i < nums.length - 1; i++) {
//     if (nums[i] === 0) {
//       count0++;
//     } else if (nums[i] === 1) {
//       count1++;
//     } else {
//       count2++;
//     }
//   }
//   for (let i = 0; i < count0; i++) {
//     nums[i] = 0;
//   }
//   for (let i = count0; i < count0 + count1; i++) {
//     nums[i] = 1;
//   }
//   for (let i = count0 + count1; i < nums.length; i++) {
//     nums[i] = 2;
//   }
//   // for doing console.log(sortColors(nums)) we shoud return nums
//   //return nums
// };
// let nums = [2, 0, 2, 1, 1, 0];
// // we can only call the function as like console.log(sortColors(nums)) when only function return something otherwise
// sortColors(nums)
// console.log(nums) 

// -----------------Optimal Approach or dutch national flag algo
function sortArray(arr) {
    let n = arr.length;
    let low = 0, mid = 0, high = n - 1; // 3 pointers

    while (mid <= high) { // mid is also at 0 
        if (arr[mid] === 0) {
            // iska mtlb arr[low] ki value arr[mid] k sath swap ho jayegi or arr[mid] ki value arr[low] k sath swap ho jayegi
            [arr[low], arr[mid]] = [arr[mid], arr[low]]; // Swap elements
            low++;
            mid++;
        } else if (arr[mid] === 1) {
            mid++;
        } else {

            [arr[mid], arr[high]] = [arr[high], arr[mid]]; // Swap elements
            high--;
        }
    }
}

// Example usage:
let arr = [0, 2, 1, 2, 0, 1];
sortArray(arr);
console.log("After sorting:");
console.log(arr); // Output should be [0, 0, 1, 1, 2, 2]


/**
  
 */