// NOTE- THESE SOLUTON ARE ONLY FOR THE SORTED ARRAYS
// Brute force solution 
// function intersectionOfArrays(A, B) {
//     let ans = [];
//     let visited = new Array(B.length).fill(false);
//     // as like storing zeros ,and array has the length same as b beacasuse we only have to store the unique element so we take the  size taht have minimum in both arrays
//     for (let i = 0; i < A.length; i++) {
//         for (let j = 0; j < B.length; j++) {
//             if (A[i] === B[j] && !visited[j]) {
//                 ans.push(B[j]);
//                 visited[j] = true;
//                 break;
//             } else if (B[j] > A[i]) {
//                 break;
//             }
//         }
//     }
    
//     return ans;
// }

// // Example usage:
// let A = [1, 2, 3, 3, 4, 5, 6, 7];
// let B = [3, 3, 4, 4, 5, 8];
// let ans = intersectionOfArrays(A, B);
// console.log(ans); // Output: [3, 3, 4, 5]
/**
 Explanation and Dry Run:
Initialization:

A = [1, 2, 3, 3, 4, 5, 6, 7]
B = [3, 3, 4, 4, 5, 8]
ans = [] (initially empty)
visited = [false, false, false, false, false, false] (to keep track of elements in B that have been used)
Iteration and Matching:

i = 0: A[0] = 1
j = 0: B[0] = 3, B[0] > A[0] -> Break inner loop.
i = 1: A[1] = 2
j = 0: B[0] = 3, B[0] > A[1] -> Break inner loop.
i = 2: A[2] = 3
j = 0: B[0] = 3, A[2] == B[0], visited[0] == false
Add B[0] to ans, mark visited[0] = true
ans = [3]
i = 3: A[3] = 3
j = 1: B[1] = 3, A[3] == B[1], visited[1] == false
Add B[1] to ans, mark visited[1] = true
ans = [3, 3]
i = 4: A[4] = 4
j = 2: B[2] = 4, A[4] == B[2], visited[2] == false
Add B[2] to ans, mark visited[2] = true
ans = [3, 3, 4]
i = 5: A[5] = 5
j = 4: B[4] = 5, A[5] == B[4], visited[4] == false
Add B[4] to ans, mark visited[4] = true
ans = [3, 3, 4, 5]
i = 6: A[6] = 6
j = 5: B[5] = 8, B[5] > A[6] -> Break inner loop.
i = 7: A[7] = 7
j = 5: B[5] = 8, B[5] > A[7] -> Break inner loop.
Final Output:

ans = [3, 3, 4, 5]
 */

//--------------------Optimal solution but it is not handle the duplicate correctly so test case is not passed----------------//
// function intersectionOfArrays(A, B) {
//     let ans = [];
//     let i = 0, j = 0;

//     while (i < A.length && j < B.length) {
//         if (A[i] < B[j]) {
//             i++;
//         } else if (B[j] < A[i]) {
//             j++;
//         } else {
//             ans.push(A[i]);
//             i++;
//             j++;
//         }
//     }

//     return ans;
// }

// // Example usage:
// let A = [1,2,2,1];
// let B = [2,2];
// let ans = intersectionOfArrays(A, B);
// console.log(ans);  // Output: [3, 3, 4, 5]
/**
 A = [1, 2, 3, 3, 4, 5, 6, 7]
B = [3, 3, 4, 4, 5, 8]
Initialization:

ans = [] (to store the result)
i = 0, j = 0 (indexes for traversing arrays A and B)
Iteration:

Step 1: i = 0, j = 0
A[0] = 1, B[0] = 3
A[0] < B[0], so i++
i = 1, j = 0
Step 2: i = 1, j = 0
A[1] = 2, B[0] = 3
A[1] < B[0], so i++
i = 2, j = 0
Step 3: i = 2, j = 0
A[2] = 3, B[0] = 3
A[2] == B[0], so add A[2] to ans and increment both i and j
ans = [3]
i = 3, j = 1
Step 4: i = 3, j = 1
A[3] = 3, B[1] = 3
A[3] == B[1], so add A[3] to ans and increment both i and j
ans = [3, 3]
i = 4, j = 2
Step 5: i = 4, j = 2
A[4] = 4, B[2] = 4
A[4] == B[2], so add A[4] to ans and increment both i and j
ans = [3, 3, 4]
i = 5, j = 3
Step 6: i = 5, j = 3
A[5] = 5, B[3] = 4
A[5] > B[3], so j++
i = 5, j = 4
Step 7: i = 5, j = 4
A[5] = 5, B[4] = 5
A[5] == B[4], so add A[5] to ans and increment both i and j
ans = [3, 3, 4, 5]
i = 6, j = 5
Step 8: i = 6, j = 5
A[6] = 6, B[5] = 8
A[6] < B[5], so i++
i = 7, j = 5
Step 9: i = 7, j = 5
A[7] = 7, B[5] = 8
A[7] < B[5], so i++
i = 8, j = 5 (end of loop since i reaches A.length)
Final Output:

The result ans after all iterations is [3, 3, 4, 5].
 */
//  function intersectionOfArrays(A, B) {
//     let ans = [];
//     let i = 0, j = 0;

//     while (i < A.length && j < B.length) {
//         if (A[i] < B[j]) {
//             i++;
//         } else if (B[j] < A[i]) {
//             j++;
//         } else {
//             // Check if the element to be added is already present in the ans array
//             if (ans.length === 0 || ans[ans.length - 1] !== A[i]) {
//                 ans.push(A[i]);
//             }
//             i++;
//             j++;
//         }
//     }

//     return ans;
// }

// // Example usage:
// let A = [4,9,5];
// let B = [9,4,9,8,4];
// let ans = intersectionOfArrays(A, B);
//  console.log(ans);  // Output: [2]

/**
 Step 3: i = 2, j = 1
A[2] = 2, B[1] = 2
A[2] == B[1], but do not add A[2] to ans since ans[ans.length - 1] == A[2]
i++ and j++
i = 3, j = 2

 */

// 2nd test case is also not pass so we use the set data structure
function intersectionOfArrays(A, B) {
    // Convert arrays to sets to handle duplicates and improve lookup time
    let setA = new Set(A);
    let setB = new Set(B);

    // The result array
    let ans = [];

    // Iterate through setA and check if each element is in setB
    setA.forEach(value => {
        if (setB.has(value)) {
            ans.push(value);
        }
    });

    return ans;
}

// Example usage:
let A = [4, 9, 5];
let B = [9, 4, 9, 8, 4];
let ans = intersectionOfArrays(A, B);
console.log(ans);  // Output: [4, 9] or [9, 4]
