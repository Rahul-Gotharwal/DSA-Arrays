// // brute approach
// function maxProductSubArray(nums) {
//     let result = Number.MIN_SAFE_INTEGER;
//     for (let i = 0; i < nums.length - 1; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             let prod = 1;
//             for (let k = i; k <= j; k++) {
//                 prod *= nums[k];
//             }
//             result = Math.max(result, prod);
//         }
//     }
//     return result;
// }

// let nums = [1, 2, -3, 0, -4, -5];
// console.log("The maximum product subarray: " + maxProductSubArray(nums));


//------------------- better approach---------------------//
// function maxProductSubArray(nums) {
//     let result = nums[0];
//     for (let i = 0; i < nums.length - 1; i++) {
//         let p = nums[i];
//         for (let j = i + 1; j < nums.length; j++) {
//             result = Math.max(result, p);
//             p *= nums[j];
//         }
//         result = Math.max(result, p); // manages (n-1)th term
//     }
//     return result;
// }

// let nums = [1, 2, -3, 0, -4, -5];
// console.log("The maximum product subarray: " + maxProductSubArray(nums));


//-------------------- observational appraoch------------------//
// function maxProductSubArray(arr) {
//     let n = arr.length; // size of array.

//     let pre = 1, suff = 1;
//     let ans = Number.MIN_SAFE_INTEGER;
//     for (let i = 0; i < n; i++) {
//         if (pre === 0) pre = 1;
//         if (suff === 0) suff = 1;
//         pre *= arr[i];
//         suff *= arr[n - i - 1];
//         ans = Math.max(ans, Math.max(pre, suff));
//     }
//     return ans;
// }

// let arr = [1, 2, -3, 0, -4, -5];
// console.log("The maximum product subarray is: " + maxProductSubArray(arr));


// explanation in the copy 

//----------------------kadan's algoritm or 2nd optimal approach



function maxProductSubArray(nums) {
    let prod1 = nums[0], prod2 = nums[0], result = nums[0];

    for (let i = 1; i < nums.length; i++) {
        let temp = Math.max(nums[i], prod1 * nums[i], prod2 * nums[i]);
        prod2 = Math.min(nums[i], prod1 * nums[i], prod2 * nums[i]);
        prod1 = temp;

        result = Math.max(result, prod1);
    }

    return result;
}

let nums = [1, 2, -3, 0, -4, -5];
console.log("The maximum product subarray: " + maxProductSubArray(nums));

/**
 Let's dry run the `maxProductSubArray` function with the provided input array `nums = [1, 2, -3, 0, -4, -5]`:

1. Initialize variables:
   - `prod1 = nums[0] = 1`
   - `prod2 = nums[0] = 1`
   - `result = nums[0] = 1`

2. Loop through the array:
   - **Iteration 1 (i = 1)**:
     - `temp = Math.max(2, 1 * 2, 1 * 2) = 2`
     - `prod2 = Math.min(2, 1 * 2, 1 * 2) = 2`
     - `prod1 = temp = 2`
     - `result = Math.max(1, 2) = 2`
   - **Iteration 2 (i = 2)**:
     - `temp = Math.max(-3, 2 * -3, 2 * 2) = 2`
     - `prod2 = Math.min(-3, 2 * -3, 2 * 2) = -3`
     - `prod1 = temp = 2`
     - `result = Math.max(2, 2) = 2`
   - **Iteration 3 (i = 3)**:
     - `temp = Math.max(0, -3 * 0, -3 * -3) = 0`
     - `prod2 = Math.min(0, -3 * 0, -3 * -3) = 0`
     - `prod1 = temp = 0`
     - `result = Math.max(2, 0) = 2`
   - **Iteration 4 (i = 4)**:
     - `temp = Math.max(-4, 0 * -4, 0 * 0) = 0`
     - `prod2 = Math.min(-4, 0 * -4, 0 * 0) = -4`
     - `prod1 = temp = 0`
     - `result = Math.max(2, 0) = 2`
   - **Iteration 5 (i = 5)**:
     - `temp = Math.max(-5, -4 * -5, 0 * -5) = 20`
     - `prod2 = Math.min(-5, -4 * -5, 0 * -5) = -20`
     - `prod1 = temp = 20`
     - `result = Math.max(2, 20) = 20`

3. Return the `result`, which is `20`.

So, the maximum product subarray of `[1, 2, -3, 0, -4, -5]` is `20`.
 */
