// brute approach
// var productExceptSelf = function(nums) {
// let ans = new Array(nums.length).fill(1)
//     for(let i = 0 ; i<nums.length;i++){
//         let product = 1;
//         for(j = 0 ; j<nums.length;j++ ){
//             if(i==j)
//             continue;
//         product*=nums[j]
//         }
//        ans[i] = product
//     }
//     return ans
// };

// let nums = [1,2,3,4]
// console.log(productExceptSelf(nums))

// using left and right pointer apparoach using chat -gpt i think it is same as prefix and suffix
// var productExceptSelf = function(nums) {
//     let n = nums.length;
//     let ans = new Array(n).fill(1);
    
//     // Calculate left products
//     let leftProduct = 1;
//     for (let i = 0; i < n; i++) {
//         ans[i] = leftProduct;
//         leftProduct *= nums[i];
//     }
    
//     // Calculate right products and combine with left products
//     let rightProduct = 1;
//     for (let i = n - 1; i >= 0; i--) {
//         ans[i] *= rightProduct;
//         rightProduct *= nums[i];
//     }
    
//     return ans;
// };
// let nums = [1, 2, 3, 4];
// console.log(productExceptSelf(nums));  // Output: [24, 12, 8, 6]
/**
Dry Run with [1, 2, 3, 4]:
Initialization:
nums = [1, 2, 3, 4]
n = 4
ans = [1, 1, 1, 1] (initially filled with 1s)
First Pass (Left Products):
i = 0:

leftProduct = 1
ans[0] = 1
leftProduct = 1 * nums[0] = 1 * 1 = 1
ans = [1, 1, 1, 1]
i = 1:

leftProduct = 1
ans[1] = 1
leftProduct = 1 * nums[1] = 1 * 2 = 2
ans = [1, 1, 1, 1]
i = 2:

leftProduct = 2
ans[2] = 2
leftProduct = 2 * nums[2] = 2 * 3 = 6
ans = [1, 1, 2, 1]
i = 3:

leftProduct = 6
ans[3] = 6
leftProduct = 6 * nums[3] = 6 * 4 = 24
ans = [1, 1, 2, 6]
Second Pass (Right Products):
i = 3:

rightProduct = 1
ans[3] *= 1 => ans[3] = 6
rightProduct = 1 * nums[3] = 1 * 4 = 4
ans = [1, 1, 2, 6]
i = 2:

rightProduct = 4
ans[2] *= 4 => ans[2] = 2 * 4 = 8
rightProduct = 4 * nums[2] = 4 * 3 = 12
ans = [1, 1, 8, 6]
i = 1:

rightProduct = 12
ans[1] *= 12 => ans[1] = 1 * 12 = 12
rightProduct = 12 * nums[1] = 12 * 2 = 24
ans = [1, 12, 8, 6]
i = 0:

rightProduct = 24
ans[0] *= 24 => ans[0] = 1 * 24 = 24
rightProduct = 24 * nums[0] = 24 * 1 = 24
ans = [24, 12, 8, 6]
Final Result:
The final result is [24, 12, 8, 6], which matches the expected output.
 */

// using divison 
var productExceptSelf = function(nums) {
    let totalProduct = 1;
    let zeroCount = 0;

    // Calculate the total product of all elements and count zeros
    for (let num of nums) {
        if (num === 0) {
            zeroCount++;
        } else {
            totalProduct *= num;
        }
    }

    // If there are more than one zeros, all elements in result will be zero
    if (zeroCount > 1) {
        return new Array(nums.length).fill(0);
        // if there are two arrays fill all the array with zeros
    }

    let ans = new Array(nums.length);

    // If there's exactly one zero, all elements except the one corresponding to zero will be zero
    for (let i = 0; i < nums.length; i++) {
        if (zeroCount === 1) {
            if (nums[i] === 0) {
                ans[i] = totalProduct;
            } else {
                ans[i] = 1;
            }
        } else {
            ans[i] = totalProduct / nums[i];
        }
    }

    return ans;
};

let nums = [1, 2, 3, 4];
console.log(productExceptSelf(nums));  // Output: [24, 12, 8, 6]



