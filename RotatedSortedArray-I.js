var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        }

        // Determine which part is sorted
        if (nums[left] <= nums[mid]) {
            // Left part is sorted
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            // Right part is sorted
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return -1;
}
const nums = [4, 5, 6, 7, 0, 1, 2];
const target = 0;
const index = search(nums, target);
console.log(index); // Output: 4

/*
Sure, let's dry run the code with an example. Let's take the array `nums = [4, 5, 6, 7, 0, 1, 2]` and `target = 0`.

### Initialization:
- `left = 0`
- `right = 6` (last index of the array)

### First Iteration:
1. Calculate `mid`:
   - `mid = Math.floor((0 + 6) / 2) = 3`
2. Check `nums[mid]`:
   - `nums[3] = 7`
   - `nums[3]` is not the target (`0`)
3. Determine which part is sorted:
   - `nums[left] <= nums[mid]` -> `nums[0] <= nums[3]` -> `4 <= 7` (True, left part is sorted)
   - Check if the target is in the left sorted part:
     - `nums[left] <= target < nums[mid]` -> `4 <= 0 < 7` (False)
   - Target is not in the left sorted part, so search in the right part:
     - `left = mid + 1 = 3 + 1 = 4`

### Second Iteration:
1. Calculate `mid`:
   - `mid = Math.floor((4 + 6) / 2) = 5`
2. Check `nums[mid]`:
   - `nums[5] = 1`
   - `nums[5]` is not the target (`0`)
3. Determine which part is sorted:
   - `nums[left] <= nums[mid]` -> `nums[4] <= nums[5]` -> `0 <= 1` (True, left part is sorted)
   - Check if the target is in the left sorted part:
     - `nums[left] <= target < nums[mid]` -> `0 <= 0 < 1` (True)
   - Target is in the left sorted part, so search in the left part:
     - `right = mid - 1 = 5 - 1 = 4`

### Third Iteration:
1. Calculate `mid`:
   - `mid = Math.floor((4 + 4) / 2) = 4`
2. Check `nums[mid]`:
   - `nums[4] = 0`
   - `nums[4]` is the target (`0`)
3. Return the index:
   - Return `4`

The target `0` is found at index `4`.

### Summary:
The algorithm efficiently finds the target `0` at index `4` in the rotated sorted array `[4, 5, 6, 7, 0, 1, 2]` using a modified binary search with O(log n) complexity.

### Example of another dry run with nums = [7, 8, 1, 2, 3, 4, 5, 6] and target = 4:
#### Initialization:
- `left = 0`
- `right = 7` (last index of the array)

#### First Iteration:
1. Calculate `mid`:
   - `mid = Math.floor((0 + 7) / 2) = 3`
2. Check `nums[mid]`:
   - `nums[3] = 2`
   - `nums[3]` is not the target (`4`)
3. Determine which part is sorted:
   - `nums[left] <= nums[mid]` -> `nums[0] <= nums[3]` -> `7 <= 2` (False, right part is sorted)
   - Check if the target is in the right sorted part:
     - `nums[mid] < target <= nums[right]` -> `2 < 4 <= 6` (True)
   - Target is in the right sorted part, so search in the right part:
     - `left = mid + 1 = 3 + 1 = 4`

#### Second Iteration:
1. Calculate `mid`:
   - `mid = Math.floor((4 + 7) / 2) = 5`
2. Check `nums[mid]`:
   - `nums[5] = 4`
   - `nums[5]` is the target (`4`)
3. Return the index:
   - Return `5`

The target `4` is found at index `5`. This demonstrates the algorithm's efficiency in different scenarios.
*/