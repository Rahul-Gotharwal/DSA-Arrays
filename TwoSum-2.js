// using two for loops but this is not the optimal solution because the time limit will exceed
var twoSum = function (nums, target) {
  let indices = [];
  for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {  // Corrected increment for j
          if (nums[i] + nums[j] === target) {
              indices.push(i+1, j+1);
              return indices;
          }
      }
  }
  return indices;
};

let nums = [4, 4, 6, 2, 4, 5];
let target = 9;
let result = twoSum(nums, target);

console.log(result);



// optimal solution = we jsut added+1 to the complement or i 
// var twoSum = function(nums, target) {
//     let numMap = new Map();
//     for (let i = 0; i < nums.length; i++) {
//         let complement = target - nums[i];
//         if (numMap.has(complement)) {
//             return [numMap.get(complement)+1, i+1];
//         }
//         numMap.set(nums[i], i);
//     }
//     return [];
//   };
  
//   let nums = [4, 4, 6, 2, 6, 5];
//   let target = 9;
//   let result = twoSum(nums, target);
  
//   console.log(result);