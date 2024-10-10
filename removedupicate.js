var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;

    let k = 0;  // k will be the index to place the unique elements

    for (let i = 0; i < nums.length; i++) {
        if (i < 2 || nums[i] !== nums[k - 2]) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
};

// Example usage:
let nums = [1, 1, 1, 2, 2, 3];
let expectedNums = [1, 1, 2, 2, 3]; // The expected answer with correct length

let k = removeDuplicates(nums); // Calls your implementation

console.assert(k === expectedNums.length, `Expected length ${expectedNums.length}, but got ${k}`);
for (let i = 0; i < k; i++) {
    console.assert(nums[i] === expectedNums[i], `Expected ${expectedNums[i]} at index ${i}, but got ${nums[i]}`);
}

console.log(`Count of elements: ${k}`); // Output: Count of elements: 5
console.log(nums.slice(0, k)); // Output: [1, 1, 2, 2, 3]

/*

Let's dry run the code with the provided example to ensure it works correctly.

Example
Input: nums = [1, 1, 1, 2, 2, 3]
Expected Output: k = 5 and nums = [1, 1, 2, 2, 3]

Dry Run
Initialization:

k = 0
Iteration:

i = 0:
Condition: i < 2 is true.
Set nums[k] = nums[i] -> nums[0] = 1
Increment k -> k = 1
i = 1:
Condition: i < 2 is true.
Set nums[k] = nums[i] -> nums[1] = 1
Increment k -> k = 2
i = 2:
Condition: i >= 2 is true, nums[i] !== nums[k - 2] is 1 !== 1 which is false.
Skip this element.
i = 3:
Condition: i >= 2 is true, nums[i] !== nums[k - 2] is 2 !== 1 which is true.
Set nums[k] = nums[i] -> nums[2] = 2
Increment k -> k = 3
i = 4:
Condition: i >= 2 is true, nums[i] !== nums[k - 2] is 2 !== 1 which is true.
Set nums[k] = nums[i] -> nums[3] = 2
Increment k -> k = 4
i = 5:
Condition: i >= 2 is true, nums[i] !== nums[k - 2] is 3 !== 2 which is true.
Set nums[k] = nums[i] -> nums[4] = 3
Increment k -> k = 5
Final Result:
k = 5

*/ 