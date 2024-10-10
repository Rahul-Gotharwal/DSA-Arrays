// var rotate = function(nums, k) {
//     k = k % nums.length; // In case k is greater than the length of the array
//     reverse(nums, 0, nums.length - 1);
//     reverse(nums, 0, k - 1);
//     reverse(nums, k, nums.length - 1);
// };

// var reverse = function(nums, start, end) {
//     while (start < end) {
//         let temp = nums[start];
//         nums[start] = nums[end];
//         nums[end] = temp;
//         start++;
//         end--;
//     }
// };

// // Example usage
// let nums = [1, 2, 3, 4, 5, 6, 7];
// let k = 3;
// rotate(nums, k);
// console.log(nums); // Output: [5, 6, 7, 1, 2, 3, 4]
/**
 * 
 * Input: nums = [1, 2, 3, 4, 5, 6, 7], k = 3
Calculate k = k % nums.length:
Since k is 3 and nums.length is 7, k remains 3 (k % 7 = 3).
Reverse the entire array:

javascript
Copy code
reverse(nums, 0, nums.length - 1);
Call reverse(nums, 0, 6).
Initial nums = [1, 2, 3, 4, 5, 6, 7].
Reverse from index 0 to 6:
Swap elements at indices 0 and 6: nums = [7, 2, 3, 4, 5, 6, 1].
Swap elements at indices 1 and 5: nums = [7, 6, 3, 4, 5, 2, 1].
Swap elements at indices 2 and 4: nums = [7, 6, 5, 4, 3, 2, 1].
Stop as start equals end at index 3.
Reverse the first k elements:

javascript
Copy code
reverse(nums, 0, k - 1);
Call reverse(nums, 0, 2).
Initial nums = [7, 6, 5, 4, 3, 2, 1].
Reverse from index 0 to 2:
Swap elements at indices 0 and 2: nums = [5, 6, 7, 4, 3, 2, 1].
Stop as start equals end at index 1.
Reverse the remaining elements:

javascript
Copy code
reverse(nums, k, nums.length - 1);
Call reverse(nums, 3, 6).
Initial nums = [5, 6, 7, 4, 3, 2, 1].
Reverse from index 3 to 6:
Swap elements at indices 3 and 6: nums = [5, 6, 7, 1, 3, 2, 4].
Swap elements at indices 4 and 5: nums = [5, 6, 7, 1, 2, 3, 4].
Stop as start equals end at index 5.
Final Result
The array after performing the three reversals is [5, 6, 7, 1, 2, 3, 4], which matches the expected output for a right rotation of 3 steps.
 */


// ----------------Left Rotation ------------------//
var rotate = function(nums, k) {
    k = k % nums.length; // In case k is greater than the length of the array
    reverse(nums, 0, k - 1); // Reverse the first k elements
    reverse(nums, k, nums.length - 1); // Reverse the remaining elements
    reverse(nums, 0, nums.length - 1); // Reverse the entire array
};

var reverse = function(nums, start, end) {
    while (start < end) {
        let temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
};

// Example usage
let nums = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
rotate(nums, k);
console.log(nums); // Output: [4, 5, 6, 7, 1, 2, 3]
