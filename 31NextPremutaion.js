// //--Brute Force Appraoch -Chat Gpt
// function nextPermutation(nums) {
//     // Helper function to generate permutations recursively
//     function permute(arr, l, r, result) {
//       if (l === r) {
//         result.push([...arr]);
//       } else {
//         for (let i = l; i <= r; i++) {
//           [arr[l], arr[i]] = [arr[i], arr[l]];
//           permute(arr, l + 1, r, result);
//           [arr[l], arr[i]] = [arr[i], arr[l]]; // backtrack
//         }
//       }
//     }
  
//     // Generate all permutations
//     let permutations = [];
//     permute(nums, 0, nums.length - 1, permutations);
  
//     // Sort permutations lexicographically
//     permutations.sort((a, b) => {
//       for (let i = 0; i < a.length; i++) {
//         if (a[i] !== b[i]) {
//           return a[i] - b[i];
//         }
//       }
//       return 0;
//     });
  
//     // Find the current permutation and get the next one
//     for (let i = 0; i < permutations.length; i++) {
//       if (JSON.stringify(permutations[i]) === JSON.stringify(nums)) {
//         if (i < permutations.length - 1) {
//           return permutations[i + 1];
//         } else {
//           return permutations[0];
//         }
//       }
//     }
//   }
  
//   // Example usage
//   let arr = [3,1,2];
//   let ans = nextPermutation(arr);
//   console.log("The next permutation is:", ans);
  

// //Optimal Appraoch

function nextGreaterPermutation(A) {
    let n = A.length; // size of the array.

    // Step 1: Find the break point:
    let ind = -1; // break point
    for (let i = n - 2; i >= 0; i--) {
        if (A[i] < A[i + 1]) {
            // index i is the break point
            ind = i;
            break;
        }
    }

    // If break point does not exist:
    if (ind == -1) {
        // reverse the whole array:
        A.reverse();
        return A;
    }

    // Step 2: Find the next greater element
    //         and swap it with A[ind]:

    for (let i = n - 1; i > ind; i--) {
        if (A[i] > A[ind]) {
            [A[i], A[ind]] = [A[ind], A[i]]; // swap A[i] and A[ind]
            break;
        }
    }

    // Step 3: reverse the right half:
    A.splice(ind + 1, n - ind - 1, ...A.slice(ind + 1).reverse());

    return A;
}

let A = [2, 1, 5, 4, 3, 0, 0];
let ans = nextGreaterPermutation(A);

console.log("The next permutation is: [" + ans.join(" ") + "]");

