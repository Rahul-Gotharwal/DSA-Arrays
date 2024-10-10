// var findmax = function (arr) {
//   let max = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (max < arr[i]) {
//       max = arr[i];
//     }
//   }
//   return max;
// };
// var findmin = function (arr) {
//   let min = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (min > arr[i]) {
//       min = arr[i]; 
//     }
//   }
//   return min;
// };
// var array = [4, 5, 6, 6, 7, 1, 8];
// let v = findmax(array);
// let g = findmin(array);
// console.log(v);
// console.log(g);
// ---------------maximum and minimum find-------------------//
// var maxmin = function (arr) {
//   let min = arr[0];
//   let max = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (min > arr[i]) {
//       min = arr[i];
//     }
//     if (max < arr[i]) {
//       max = arr[i];
//     }
//   }
//   return { max, min };
// };
// var array = [4, 5, 6, 6, 7, 1, 8];
// let result = maxmin(array);

// console.log("Maximum value:", result.max); // we calling the method here by the help of the dot that we are define in the main function
// console.log("Minimum value:", result.min);

// var maxmin = function (arr) {
//     let result = {
//       max: undefined,
//       min: undefined
//     };

//     const findMinMax = () => {
//       result.max = arr[0];
//       result.min = arr[0];

//       for (let i = 1; i < arr.length; i++) {
//         if (result.max < arr[i]) {
//           result.max = arr[i];
//         }

//         if (result.min > arr[i]) {
//           result.min = arr[i];
//         }
//       }
//     };

//     findMinMax();

//     return result;
//   };

//   var array = [4, 5, 6, 6, 7, 1, 8];
//   let result = maxmin(array);

//   console.log("Maximum value:", result.max);
//   console.log("Minimum value:", result.min);

//add the numbers to the given  target
// var twoSum = function(nums , target){
// let sum= nums[0]
// for(let i=0 ;i<target;i++){
// sum= nums[i] + sum
// }
// return sum
// }
// let nums = [4,5,6,2,4,5]
// let result = twoSum(nums , 3)
// console.log(result)

// leetcode1 =>  using array 
// var twoSum = function (nums, target) {
//   let indices = [];
//   for (let i = 0; i < nums.length; i++) {
//       for (let j = i + 1; j < nums.length; j++) {  // Corrected increment for j
//           if (nums[i] + nums[j] === target) {
//               indices.push(i, j);
//               return indices;
//           }
//       }
//   }
//   return indices;
// };

// let nums = [4, 4, 6, 2, 4, 5];
// let target = 9;
// let result = twoSum(nums, target);

// console.log(result);



 // using hashmap
 var twoSum = function(nums, target) {
  let numMap = new Map();
  for (let i = 0; i < nums.length; i++) {
      let complement = target - nums[i];
      if (numMap.has(complement)) {
          return [numMap.get(complement), i];
      }
      numMap.set(nums[i], i);
  }
  return [];
};

let nums = [4, 4, 6, 2, 4, 5];
let target = 9;
let result = twoSum(nums, target);

console.log(result);
