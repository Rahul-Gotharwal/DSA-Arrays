// // binary serach approach 
// var findMedianSortedArrays = function(nums1, nums2) {
// const n1 = nums1.length;
//  const n2 = nums2.length;
 
//  if (n1 > n2) return findMedianSortedArrays(nums2, nums1); // Ensure nums1 is the smaller array
// // we are using this n1> n2 beacuse for smaller search space and we should search in only num1
// // and also the arays are changes in nums1 = [2] ,nums2 = [1, 3]
// // in the function it secquence are change of num2 and num1 findMedianSortedArrays(nums2, nums1); this is how they return the arrays change position

//  let low = 0, high = n1;
//  const left = Math.floor((n1 + n2 + 1) / 2);
//  const n = n1 + n2;
 
//  while (low <= high) {
//    const mid1 = Math.floor((low + high) / 2);
//    const mid2 = left - mid1;

//    const l1 = mid1 > 0 ? nums1[mid1 - 1] : Number.MIN_SAFE_INTEGER;
//    const l2 = mid2 > 0 ? nums2[mid2 - 1] : Number.MIN_SAFE_INTEGER;
//    const r1 = mid1 < n1 ? nums1[mid1] : Number.MAX_SAFE_INTEGER;
//    const r2 = mid2 < n2 ? nums2[mid2] : Number.MAX_SAFE_INTEGER;

//    if (l1 <= r2 && l2 <= r1) {
//      if (n % 2 === 1) return Math.max(l1, l2); // for odd
//      return (Math.max(l1, l2) + Math.min(r1, r2)) / 2.0; 
//    } else if (l1 > r2) {
//      high = mid1 - 1;
//    } else {
//      low = mid1 + 1;
//    }
//  }
 
//  return 0; 
// };
// // Example usage:
// const nums1 = [1, 3];
// const nums2 = [2];
// console.log(findMedianSortedArrays(nums1, nums2)); // Output: 2.00000

/*
Explanation
Initialization:

n1 and n2 store the lengths of the input arrays nums1 and nums2.
Ensure nums1 is the smaller array by swapping if necessary to minimize the search space.
Initialize low and high pointers for binary search on the smaller array nums1.
left calculates the combined median position.
Binary Search:

Calculate mid1 and mid2, representing partitions of nums1 and nums2.
Determine l1, l2, r1, and r2, representing the boundary values of the partitions.
Check if the partitions are correct:
If l1 <= r2 and l2 <= r1, the correct partition is found.
If n (combined length) is odd, return the maximum of l1 and l2.
If even, return the average of the maximum of left partition values and the minimum of right partition values.
Adjust search boundaries based on comparison of boundary values.*/

// try and run code 

/*
Initial Setup
nums1 = [1, 3]
nums2 = [2]
n1 = nums1.length = 2
n2 = nums2.length = 1
Since n1 > n2, we call findMedianSortedArrays(nums2, nums1) to ensure the smaller array is nums1.
Updated Initial Setup
nums1 = [2]
nums2 = [1, 3]
n1 = nums1.length = 1
n2 = nums2.length = 2
low = 0
high = n1 = 1
left = Math.floor((n1 + n2 + 1) / 2) = Math.floor((1 + 2 + 1) / 2) = 2
n = n1 + n2 = 3
First Iteration of the While Loop
Calculate Midpoints:

mid1 = Math.floor((low + high) / 2) = Math.floor((0 + 1) / 2) = 0
mid2 = left - mid1 = 2 - 0 = 2
Boundary Values:

l1 = (mid1 > 0) ? nums1[mid1 - 1] : Number.MIN_SAFE_INTEGER = Number.MIN_SAFE_INTEGER
l2 = (mid2 > 0) ? nums2[mid2 - 1] : Number.MIN_SAFE_INTEGER = nums2[1] = 3
r1 = (mid1 < n1) ? nums1[mid1] : Number.MAX_SAFE_INTEGER = nums1[0] = 2
r2 = (mid2 < n2) ? nums2[mid2] : Number.MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER
Condition Checks:

Check if (l1 <= r2 && l2 <= r1):
l1 <= r2 is Number.MIN_SAFE_INTEGER <= Number.MAX_SAFE_INTEGER which is true
l2 <= r1 is 3 <= 2 which is false
Since the condition is not met, check else if (l1 > r2):
l1 > r2 is Number.MIN_SAFE_INTEGER > Number.MAX_SAFE_INTEGER which is false
Else, adjust low:
low = mid1 + 1 = 0 + 1 = 1
Second Iteration of the While Loop
Calculate Midpoints:

mid1 = Math.floor((low + high) / 2) = Math.floor((1 + 1) / 2) = 1
mid2 = left - mid1 = 2 - 1 = 1
Boundary Values:

l1 = (mid1 > 0) ? nums1[mid1 - 1] : Number.MIN_SAFE_INTEGER = nums1[0] = 2
l2 = (mid2 > 0) ? nums2[mid2 - 1] : Number.MIN_SAFE_INTEGER = nums2[0] = 1
r1 = (mid1 < n1) ? nums1[mid1] : Number.MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER
r2 = (mid2 < n2) ? nums2[mid2] : Number.MAX_SAFE_INTEGER = nums2[1] = 3
Condition Checks:

Check if (l1 <= r2 && l2 <= r1):
l1 <= r2 is 2 <= 3 which is true
l2 <= r1 is 1 <= Number.MAX_SAFE_INTEGER which is true
Both conditions are met, so check if n % 2 === 1:
n % 2 === 1 is 3 % 2 === 1 which is true
Return Math.max(l1, l2):
Math.max(l1, l2) = Math.max(2, 1) = 2
Final Result
The median of the two sorted arrays [1, 3] and [2] is 2.

*/ 


// optimal solution 
var findMedianSortedArrays = function(nums1, nums2) {
  let array = [];
  let n1 = nums1.length;
  let n2 = nums2.length;
  let i = 0;
  let j = 0;

  // Merging the two sorted arrays
  while (i < n1 && j < n2) {
    if (nums1[i] < nums2[j]) {
      array.push(nums1[i++]);
    } else {
      array.push(nums2[j++]);
    }
  }

  // For remaining elements in nums1
  while (i < n1) {
    array.push(nums1[i++]);
  }

  // For remaining elements in nums2
  while (j < n2) {
    array.push(nums2[j++]);
  }

  // Calculate the median
  let n = n1 + n2;
  if (n % 2 === 1) {
    return array[Math.floor(n / 2)];
  } else {
    return (array[Math.floor(n / 2)] + array[Math.floor(n / 2) - 1]) / 2.0;
  }
};

// Example usage:
const nums1 = [1, 3];
const nums2 = [2];
console.log(findMedianSortedArrays(nums1, nums2)); // Output: 2.0
