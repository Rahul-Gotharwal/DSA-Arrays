function minSubArrayLen(target, nums) {
    let n = nums.length;
    let minLength = Infinity;
    let left = 0;
    let sum = 0;

    for (let right = 0; right < n; right++) {
        sum += nums[right];

        while (sum >= target) {
            minLength = Math.min(minLength, right - left + 1);
            sum -= nums[left];
            left++;
        }
    }

    return minLength === Infinity ? 0 : minLength;
}

// Example usage:
let target = 7;
let nums = [2, 3, 1, 2, 4, 3];
let result = minSubArrayLen(target, nums);
console.log("The minimum length of a contiguous subarray is: " + result);

// Test cases:
target = 4;
nums = [1, 4, 4];
result = minSubArrayLen(target, nums);
console.log("The minimum length of a contiguous subarray is: " + result);  // Expected: 1

target = 11;
nums = [1, 1, 1, 1, 1, 1, 1, 1];
result = minSubArrayLen(target, nums);
console.log("The minimum length of a contiguous subarray is: " + result);  // Expected: 0


/*
I see the confusion. The original function you provided was designed to count subarrays with an exact sum, but the problem requires finding the minimal length of a subarray whose sum is greater than or equal to the target. Let's address this by focusing on the correct approach using the sliding window technique.

Here is the correct implementation to solve the problem:
### Explanation:
1. **Function Definition**: `minSubArrayLen` takes a `target` sum and an array `nums` and returns the minimum length of a contiguous subarray whose sum is at least `target`.
2. **Sliding Window Technique**:
   - Use two pointers, `left` and `right`, to maintain a window of elements from the array.
   - Expand the window by moving `right` and adding `nums[right]` to `sum`.
   - When the `sum` is greater than or equal to `target`, calculate the length of the current window (`right - left + 1`) and update `minLength`.
   - Then, shrink the window by moving `left` and subtracting `nums[left]` from `sum` until `sum` is less than `target`.
3. **Edge Cases**: If no valid subarray is found, return `0`.

### Dry Run:

**Input**:
- `target = 4`
- `nums = [1, 4, 4]`

**Execution**:
1. Initialize `minLength = Infinity`, `left = 0`, `sum = 0`.
2. Start iterating with `right`:
   - `right = 0`: Add `nums[0]` (1) to `sum`, so `sum = 1`. `sum < target`, so continue.
   - `right = 1`: Add `nums[1]` (4) to `sum`, so `sum = 5`. `sum >= target`, update `minLength = Math.min(Infinity, 1 - 0 + 1) = 2`. Subtract `nums[0]` (1) from `sum`, so `sum = 4`. Move `left` to `1`.
   - `right = 1` (continued): `sum >= target`, update `minLength = Math.min(2, 1 - 1 + 1) = 1`. Subtract `nums[1]` (4) from `sum`, so `sum = 0`. Move `left` to `2`.
   - `right = 2`: Add `nums[2]` (4) to `sum`, so `sum = 4`. `sum >= target`, update `minLength = Math.min(1, 2 - 2 + 1) = 1`. Subtract `nums[2]` (4) from `sum`, so `sum = 0`. Move `left` to `3`.

3. The loop ends and `minLength` is 1. Since `minLength` is not `Infinity`, return `minLength`.

**Output**:
- The minimum length of a contiguous subarray is: `1`

This revised code should now correctly handle the given test cases and produce the expected results.
*/

