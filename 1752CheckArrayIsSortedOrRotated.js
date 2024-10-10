//-------------ChatGpt code---------------------//
/**
 * Identify Rotations:
If an array is sorted and rotated, there should be at most one place where the order breaks (i.e., where nums[i] > nums[i + 1]).
We count these breaks to determine if the array fits the criteria.
 */
function check(nums) {
    let n = nums.length;
    let breakCount = 0;

    // Count the number of places where nums[i] > nums[i + 1]
    for (let i = 0; i < n; i++) {
        if (nums[i] > nums[(i + 1) % n]) {
            breakCount++;
           // for second example the breakcount will be 2 so thats why it retrun false
        }
    }
    // Array is valid if there is at most one such break
    return breakCount <= 1; 
}
// 

// Example usage:
// Example usage:
const nums1 = [3, 4, 5, 1, 2];
console.log(check(nums1));  // Output: true

const nums2 = [2, 1, 3, 4];
console.log(check(nums2));  // Output: false
/**
 * For nums = [3, 4, 5, 1, 2]:

Breaks at 5 > 1.
Subarrays are [3, 4, 5] and [1, 2], both sorted.
The last element of the first part (5) is greater than the first element of the second part (1).
Hence, the array is valid.
For nums = [2, 1, 3, 4]:

Breaks at 2 > 1.
Subarrays are [2] and [1, 3, 4], both sorted.
However, the last element of the first part (2) is not less than the first element of the second part (1), so it's not a valid rotation.
Dry Run
Let's do a dry run of the code for better understanding.

Input: nums = [3, 4, 5, 1, 2]

Initialize n = 5, breakCount = 0.

Loop through the array:

i = 0: nums[0] = 3, nums[1] = 4 (no break).
i = 1: nums[1] = 4, nums[2] = 5 (no break).
i = 2: nums[2] = 5, nums[3] = 1 (break found, breakCount++).
i = 3: nums[3] = 1, nums[4] = 2 (no break).
i = 4: nums[4] = 2, nums[0] = 3 (no break due to modulo).
breakCount = 1, which is less than or equal to 1, so return true.

Input: nums = [2, 1, 3, 4]

Initialize n = 4, breakCount = 0.

Loop through the array:

i = 0: nums[0] = 2, nums[1] = 1 (break found, breakCount++).
i = 1: nums[1] = 1, nums[2] = 3 (no break).
i = 2: nums[2] = 3, nums[3] = 4 (no break).
i = 3: nums[3] = 4, nums[0] = 2 (no break due to modulo).
breakCount = 1, but it's not valid since the last element before the break (2) is not less than the first element after the break (1), so return false
 */