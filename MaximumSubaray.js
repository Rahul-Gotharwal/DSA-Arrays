// with time complexity big O of n^3 
/// using for loops
// function maxSubArray(nums) {
//     let maxSum = -Infinity;
//     const n = nums.length;

//     for (let i = 0; i < n; i++) {
//         for (let j = i; j < n; j++) {
//             let currentSum = 0;
//             for (let k = i; k <= j; k++) {
//                 currentSum += nums[k];
//             }
//             if (currentSum > maxSum) {
//                 maxSum = currentSum;
//             }
//         }
//     }
    
//     return maxSum;
// }

// // Example usage:
// const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// const result = maxSubArray(nums);
// console.log(result); // Output: 6

/*
Initial Setup:
nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
maxSum = -Infinity
n = nums.length = 9
Outer Loop (i):
Starts from 0 and goes to 8.
Middle Loop (j):
Starts from i and goes to 8.
Inner Loop (k):
Runs from i to j and calculates the sum of the subarray from i to j.
Dry Run:
Iteration with i = 0:

j = 0:
currentSum = 0
k = 0: currentSum = currentSum + nums[k] = 0 + (-2) = -2
maxSum = max(maxSum, currentSum) = max(-Infinity, -2) = -2
j = 1:
currentSum = 0
k = 0: currentSum = currentSum + nums[k] = 0 + (-2) = -2
k = 1: currentSum = currentSum + nums[k] = -2 + 1 = -1
maxSum = max(maxSum, currentSum) = max(-2, -1) = -1
j = 2:
currentSum = 0
k = 0: currentSum = currentSum + nums[k] = 0 + (-2) = -2
k = 1: currentSum = currentSum + nums[k] = -2 + 1 = -1
k = 2: currentSum = currentSum + nums[k] = -1 + (-3) = -4
maxSum = max(maxSum, currentSum) = max(-1, -4) = -1
j = 3:
currentSum = 0
k = 0: currentSum = currentSum + nums[k] = 0 + (-2) = -2
k = 1: currentSum = currentSum + nums[k] = -2 + 1 = -1
k = 2: currentSum = currentSum + nums[k] = -1 + (-3) = -4
k = 3: currentSum = currentSum + nums[k] = -4 + 4 = 0
maxSum = max(maxSum, currentSum) = max(-1, 0) = 0
Continue this way for all j values from 0 to 8.
*/ 

// --------------------better or oprtimize code---------------------------// 
// using two for loops
// function maxSubArray(nums) {
//     let maxSum = -Infinity;
//     const n = nums.length;

//     for (let i = 0; i < n; i++) {
//         let currentSum = 0;
//         for (let j = i; j < n; j++) {
//             currentSum += nums[j];
//             if (currentSum > maxSum) {
//                 maxSum = currentSum;
//             }
//         }
//     }
    
//     return maxSum;
// }

// // Example usage:
// const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// const result = maxSubArray(nums);
// console.log(result); // Output: 6

// now optimal solution using kadan's algorithm and also we print the array which have the maximum sum



function maxSubArray(nums) {
    let maxSum = -Infinity;
    let currentSum = 0;
    let start = 0, ansStart = -1, ansEnd = -1;

    for (let i = 0; i < nums.length; i++) {
        if (currentSum === 0) {
            start = i;
        }
        
        currentSum += nums[i];

        if (currentSum > maxSum) {
            maxSum = currentSum; // strarting new subarray
            ansStart = start;
            ansEnd = i;
        }

        if (currentSum < 0) {
            currentSum = 0;
        }
    }
    
    return {
        maxSum: maxSum,
        subarray: nums.slice(ansStart, ansEnd + 1)
    };
}

// Example usage:
const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const result = maxSubArray(nums);
console.log(`Max sum: ${result.maxSum}, Subarray: ${result.subarray}`); // Output: Max sum: 6, Subarray: 4,-1,2,1


/*
### Explanation:

1. **Initialization**:
   - `maxSum` is initialized to `-Infinity` to ensure any sum will be larger.
   - `currentSum` starts at `0` to begin accumulating subarray sums.
   - `start`, `ansStart`, and `ansEnd` are used to track the indices of the subarray with the largest sum.

2. **Iterating through the array**:
   - **If `currentSum` is zero**, this means a new subarray may start from the current index `i`, so `start` is set to `i`.
   - Add the current element `nums[i]` to `currentSum`.
   - **If `currentSum` exceeds `maxSum`**, update `maxSum` and record the current subarray indices (`ansStart` to `ansEnd`).
   - **If `currentSum` becomes negative**, reset `currentSum` to zero to start considering a new subarray from the next index.

3. **Returning results**:
   - The function returns an object containing `maxSum` and the subarray which produced this sum.

### Dry Run:

For `nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]`:

1. `i = 0`: 
   - `currentSum = 0`, `start = 0`
   - `currentSum += -2 => currentSum = -2`
   - `currentSum < maxSum (-Infinity)`, so `maxSum = -2`, `ansStart = 0`, `ansEnd = 0`
   - `currentSum < 0`, so `currentSum = 0`

2. `i = 1`: 
   - `currentSum = 0`, `start = 1`
   - `currentSum += 1 => currentSum = 1`
   - `currentSum > maxSum (-2)`, so `maxSum = 1`, `ansStart = 1`, `ansEnd = 1`

3. Continue similarly for each `i`, updating `currentSum`, `maxSum`, `ansStart`, and `ansEnd` appropriately.

The final result for the example will be `maxSum = 6` and the subarray `[4, -1, 2, 1]`. This code ensures efficient calculation of the maximum subarray sum with \(O(n)\) time complexity, leveraging Kadane's Algorithm.
*/ 