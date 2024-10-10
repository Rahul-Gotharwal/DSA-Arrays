// BY using class
// class Solution {
//     findMaxConsecutiveOnes(nums) {
//       let cnt = 0;
//       let maxi = 0;
//       for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === 1) {
//           cnt++;
//         } else {
//           cnt = 0;
//         }
//         maxi = Math.max(maxi, cnt);
//       }
//       return maxi;
//     }
//   }
  
//   function main() {
//     const nums = [1, 1, 0, 1, 1, 1,1];
//     const obj = new Solution();
//     const ans = obj.findMaxConsecutiveOnes(nums);
//     console.log("The maximum consecutive 1's are", ans);
//   }
  
//   main();
  

  // using function 
//   function findMaxConsecutiveOnes(nums) {
//     let cnt = 0;
//     let maxi = 0;
//     for (let i = 0; i < nums.length; i++) {
//       if (nums[i] === 1) {
//         cnt++;
//       } else {
//         cnt = 0;
//       }
//       maxi = Math.max(maxi, cnt);
//     }
//     return maxi;
//   }
  
//   function main() {
//     const nums = [1, 1, 0, 1, 1, 1];
//     const ans = findMaxConsecutiveOnes(nums);
//     console.log("The maximum consecutive 1's are", ans);
//   }
  
//   main();
  
  // using for of loop
  /**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let max=0
    let c=0
    for(let x of nums){
        if(x==1) {
            c++
            if(c>max) max=c
        }    
        else  c=0   
    }
    return max
};
const nums = [1, 1, 0, 1, 1, 1];
const ans = findMaxConsecutiveOnes(nums);
console.log("The maximum consecutive 1's are", ans);