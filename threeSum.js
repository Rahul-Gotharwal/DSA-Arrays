// leetcode youtube answer
// var threeSum = function (nums) {
//   const numSet = new Set();
//   nums.sort((a, b) => a - b); // map function for storing the values
//   if (nums.length === 0) return [];
//   for (let i = 0; i < nums.length - 2; i++) {
//     j = i + 1;
//     k = nums.length - 1;
//     while (j < k) {
//       let sum = nums[j] + nums[k];
//       if (sum === -nums[i]) {
//         // set can take only the on argument so change the syntax from // numMap.add(nums[i], nums[j], nums[k]);
//         //  before adding the triplet to the set, it's sorted and then joined as a string. This ensures that duplicate triplets are not added to the set.
//         numSet.add([nums[i], nums[j], nums[k]].sort((a, b) => a - b).join(',')); 
//         j++, k--;
//       } 
      
//       else if (sum > -nums[i])
//        k--;

//       else if (sum < -nums[i]) 
//       j++;

//     }//In this example, split(',') splits the string str at each comma ,, resulting in an array ["apple", "banana", "orange"].

//   } return Array.from(numMap).map(trilplet => trilplet.split(',').map(Number))
// };
// nums = [-1, 0, 1, 2, -1, -4];
// const result = threeSum(nums)
// console.log(result)

/* 

 // WE MUST REDUCE THE SUM AT K POINTER BECASUSE ARRAY IS SORTED OR WHEN WE REDUCE IT THEN ONLY WE GET SOME LESSER VALUE
Explanation of the Two-Pointer Technique:
We will walk through the steps for i = 0 (nums[i] = -4), showing the two-pointer technique with the initial setup j = 1 and k = 5.

Initial Setup:

i = 0 (nums[i] = -4)
j = 1 (nums[j] = -1)
k = 5 (nums[k] = 2)
Calculate Sum:

sum = nums[j] + nums[k]
sum = -1 + 2 = 1
Compare sum to -nums[i]:
1 is compared to 4 (-nums[0] = -(-4) = 4)
Since sum < 4, we need to increase the sum by incrementing j.
Increment j:

Move j to the next element:
j = 2 (nums[j] = -1)
Calculate Sum:

sum = nums[j] + nums[k]
sum = -1 + 2 = 1
Compare sum to 4 (-nums[0] = 4)
sum < 4, so increment j again to increase the sum.
Increment j:

Move j to the next element:
j = 3 (nums[j] = 0)
Calculate Sum:

sum = nums[j] + nums[k]
sum = 0 + 2 = 2
Compare sum to 4 (-nums[0] = 4)
sum < 4, so increment j again to increase the sum.
Increment j:

Move j to the next element:
j = 4 (nums[j] = 1)
Calculate Sum:

sum = nums[j] + nums[k]
sum = 1 + 2 = 3
Compare sum to 4 (-nums[0] = 4)
sum < 4, so increment j again to increase the sum.
Increment j:

Move j to the next element:
j = 5 (nums[j] = 2)
Calculate Sum:

sum = nums[j] + nums[k]
sum = 2 + 2 = 4
Compare sum to 4 (-nums[0] = 4)
sum == 4, we would have found a triplet, but j and k have crossed each other.
When to Decrement k:
For the next main iteration, let's consider another example with i = 2 (nums[i] = -1), j = 3 (nums[j] = 0), and k = 5 (nums[k] = 2).

Initial Setup:

i = 2 (nums[i] = -1)
j = 3 (nums[j] = 0)
k = 5 (nums[k] = 2)
Calculate Sum:

sum = nums[j] + nums[k]
sum = 0 + 2 = 2
Compare sum to 1 (-nums[2] = 1)
sum > 1, so decrement k to reduce the sum.
Decrement k:

Move k to the previous element:
k = 4 (nums[k] = 1)
Calculate Sum:

sum = nums[j] + nums[k]
sum = 0 + 1 = 1
Compare sum to 1 (-nums[2] = 1)
sum == 1, so we have found a triplet [-1, 0, 1].
*/

//-------- leetcode best answer--------------// 

const threeSum = function(nums) {
  nums.sort((a, b) => a - b);
  const results = [];
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] === nums[i-1]) {
          continue;
      }
      let j = i + 1;
      let k = nums.length - 1;
      while (j < k) {
          const sum = nums[i] + nums[j] + nums[k];
          if (sum < 0) {
              j++;
          } else if (sum > 0) {
              k--;
          } else {
              results.push([nums[i], nums[j], nums[k]]);
              j++;
              k--;
              while (nums[j] === nums[j-1]) {
                  j++; // for skip the dupliacte
              }
              while (nums[k] === nums[k+1]) {
                  k--;
              }
              continue;
          }
      }
  }
  return results;
};
nums = [-1, 0, 1, 2, -1, -4];
const result = threeSum(nums)
console.log(result)