// ------------------Brute Force Appraoch--------------//
// function missingNumber(a, N) {
//     // Outer loop that runs from 1 to N:
//     for (let i = 1; i <= N; i++) {
//       // flag variable to check if an element exists
//       let flag = 0;

//       // Search the element using linear search:
//       for (let j = 0; j < N - 1; j++) {
//         if (a[j] === i) {
//           // i is present in the array:
//           flag = 1;
//           break;
//         }
//       }

//       // check if the element is missing (i.e., flag === 0):
//       if (flag === 0) {
//         return i;
//         // its return the index not the value but it looks like value
//       }
//     }

//     // The following line will never execute.
//     // It is just to avoid warnings.
//     return -1;
//   }

//   function main() {
//     const N = 5;
//     const a = [1, 2, 4, 5];
//     const ans = missingNumber(a, N);
//     console.log("The missing number is:", ans);
//   }

//   main();

//----------------------Better Appraoch-----------------//

// function missingNumber(a, N) {
//   const hash = new Array(N + 1).fill(0);
//   // storing the frequancy
//   for (let i = 0; i < N - 1; i++) {
//     // we dont put the values inside the hash we just only increase the index form 0 to 1
//     hash[a[i]]++;
//     //hash[a[i]] = hash[a[i]] + 1;

//     /*
//     Explanation of hash[a[i]]++
//     The operation hash[a[i]]++ works as follows:
//     a[i] accesses the value at index i of the array a.
//     hash[a[i]] accesses the element in the hash array at the index corresponding to the value a[i].
//     The ++ operator increments this value by 1.
//     example:
//     If a[i] is 2, then hash[a[i]] is hash[2].
//     hash[2]++ increments the value at hash[2] by 1.
//     */
//   }
//   for (let i = 1; i <= N; i++) {
//     if (hash[i] === 0) {
//       return i;
//     }
//   }
//   return -1;
// }
// function main() {
//   const N = 5;
//   const a = [1, 2, 4, 5];
//   const ans = missingNumber(a, N);
//   console.log("The missing number is:", ans);
// }

// main();


// ----------------Optmal Solution BY Sum -------------------------//

// function missingNumber(a, N) {
//     // Summation of first N numbers:
//     const summation = (N * (N + 1)) / 2;
  
//     // Summation of all array elements:
//     let s2 = 0;
//     for (let i = 0; i < N - 1; i++) {
//       s2 += a[i];
//     }
  
//     const missingNum = summation - s2;
//     return missingNum;
//   }
  
//   function main() {
//     const N = 5;
//     const a = [1, 2, 4, 5];
//     const ans = missingNumber(a, N);
//     console.log("The missing number is:", ans);
//   }
  
//   main();

//-----------------Opimal BY XOR----------------//



function missingNumber(a, N) {
    let xor1 = 0;
    let xor2 = 0;
  
    for (let i = 0; i < N - 1; i++) {
      xor2 = xor2 ^ a[i]; // XOR of array elements
      xor1 = xor1 ^ (i + 1); // XOR up to [1...N-1]
    }
    xor1 = xor1 ^ N; // XOR up to [1...N]
  
    return xor1 ^ xor2; // the missing number
  }
  
  function main() {
    const N = 5;
    const a = [1, 2, 4, 5];
    const ans = missingNumber(a, N);
    console.log("The missing number is:", ans);
  }
  
  main();
  

  // leetcode solution 
  
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// function missingNumber(nums) {
//     let xor1 = 0;
//     let xor2 = 0;
//     const n = nums.length; // Length of the array

//     // XOR all array elements
//     for (let i = 0; i < n; i++) {
//         xor2 = xor2 ^ nums[i];
//     }

//     // XOR all numbers from 0 to n
//     for (let i = 0; i <= n; i++) {
//         xor1 = xor1 ^ i;
//     }

//     // The missing number is the result of XORing these two results
//     return xor1 ^ xor2;
// }

// function main() {
//     const nums = [3, 0, 1];
//     const ans = missingNumber(nums);
//     console.log("The missing number is:", ans);
// }

// main();

  
  
  
  
  