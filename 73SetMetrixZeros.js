
// function markRow(matrix, n, m, i) {
//     // set all non-zero elements as -1 in the row i:
//     for (let j = 0; j < m; j++) {
//       if (matrix[i][j] !== 0) {
//         matrix[i][j] = -1;
//         // i menas row j means column\
//       }
//     }
//   }
  
//   function markCol(matrix, n, m, j) {
//     // set all non-zero elements as -1 in the col j:
//     for (let i = 0; i < n; i++) {
//       if (matrix[i][j] !== 0) {
//         matrix[i][j] = -1;
//       }
//     }
//   }
  
//   function zeroMatrix(matrix, n, m) {
//     // Set -1 for rows and cols that contains 0. Don't mark any 0 as -1:
//     for (let i = 0; i < n; i++) {
//       for (let j = 0; j < m; j++) {
//         if (matrix[i][j] === 0) {
//           markRow(matrix, n, m, i);
//           markCol(matrix, n, m, j);
//         }
//       }
//     }
//     // Finally, mark all -1 as 0:
//     for (let i = 0; i < n; i++) {
//       for (let j = 0; j < m; j++) {
//         if (matrix[i][j] === -1) {
//           matrix[i][j] = 0;
//         }
//       }
//     }
//     return matrix;
//   }
  
//   const matrix = [
//     [1, 1, 1],
//     [1, 0, 1],
//     [1, 1, 1],
//   ];
  
//   const n = matrix.length; // 3 
//   const m = matrix[0].length; // 3 
  
//   const ans = zeroMatrix(matrix, n, m);
  
//   console.log("The Final matrix is: ");
//   for (let i = 0; i < n; i++) {
//     console.log(ans[i].join(" "));
//   }

/**
 The provided code is designed to modify a given matrix such that if any element in the matrix is 0, all the elements in its row and column are set to 0. Here's a step-by-step explanation of how the code works:

### Code Explanation

1. **`markRow(matrix, n, m, i)` function:**
   - This function sets all non-zero elements in the row `i` of the matrix to `-1`.
   - It loops through all columns `j` in the specified row `i`.

2. **`markCol(matrix, n, m, j)` function:**
   - This function sets all non-zero elements in the column `j` of the matrix to `-1`.
   - It loops through all rows `i` in the specified column `j`.

3. **`zeroMatrix(matrix, n, m)` function:**
   - This is the main function that modifies the matrix.
   - It first scans the matrix to find elements that are `0`. For each `0` found, it calls `markRow` and `markCol` to set the corresponding row and column elements to `-1`.
   - After marking, it scans the matrix again to replace all `-1` elements with `0`.

### Dry Run with Given Matrix

Let's dry run the code with the initial matrix:
1. **Initialization:**
   - `n` is 3 (number of rows).
   - `m` is 3 (number of columns).

2. **First Scan:**
   - Iterate over each element to find `0`s.

   Iteration details:
   - `i = 0, j = 0`: element is `1` (no change).
   - `i = 0, j = 1`: element is `1` (no change).
   - `i = 0, j = 2`: element is `1` (no change).
   - `i = 1, j = 0`: element is `1` (no change).
   - `i = 1, j = 1`: element is `0`. Call `markRow(matrix, 3, 3, 1)` and `markCol(matrix, 3, 3, 1)`.

     - **Marking Row 1:**
       - `j = 0`: element is `1`, change to `-1`.
       - `j = 1`: element is `0` (no change).
       - `j = 2`: element is `1`, change to `-1`.
       - After marking: `matrix[1]` becomes `[-1, 0, -1]`.

     - **Marking Column 1:**
       - `i = 0`: element is `1`, change to `-1`.
       - `i = 1`: element is `0` (no change).
       - `i = 2`: element is `1`, change to `-1`.
       - After marking: column 1 in matrix becomes `[-1, 0, -1]`.

   - `i = 1, j = 2`: element is `-1` (no change, continue scan).
   - `i = 2, j = 0`: element is `1`, change to `-1`.
   - `i = 2, j = 1`: element is `-1` (no change).
   - `i = 2, j = 2`: element is `1`, change to `-1`.

   Updated matrix after first scan:
   ```javascript
   [
     [1, -1, 1],
     [-1, 0, -1],
     [1, -1, 1],
   ]
   ```

3. **Second Scan:**
   - Replace all `-1`s with `0`.

   Iteration details:
   - `i = 0, j = 0`: element is `1` (no change).
   - `i = 0, j = 1`: element is `-1`, change to `0`.
   - `i = 0, j = 2`: element is `1` (no change).
   - `i = 1, j = 0`: element is `-1`, change to `0`.
   - `i = 1, j = 1`: element is `0` (no change).
   - `i = 1, j = 2`: element is `-1`, change to `0`.
   - `i = 2, j = 0`: element is `1` (no change).
   - `i = 2, j = 1`: element is `-1`, change to `0`.
   - `i = 2, j = 2`: element is `1` (no change).

This modified matrix correctly reflects the rule that any row or column containing a `0` should be set to all `0`s.
 */
   
 // ------------------------Beter Approach----------------------//
// function zeroMatrix(matrix){
//   const n = matrix.length ;
//   const m = matrix[0].length; // col length like 0 ,1,2
//   const row = new Array(n).fill(0)
//   const col = new Array(m).fill(0)
//   for(let i = 0 ; i<n ; i++ ){
//     for(let j = 0 ; j< m ; j++){
//       if(matrix[i][j] === 0){
//         row[i] = 1;
//         col[j] = 1
//       }
//     }
//   }
//  // Finally, mark all (i, j) as 0
//   // if row[i] or col[j] is marked with 1.
//   for(let i = 0 ;i< n ; i++){
//     for(let j = 0 ;j<m ; j++){
//       if(row[i]|| col[j]){ //row[i] || col[j] checks if either row[i] is 1 or col[j] is 1.
//         matrix[i][j] = 0
//       }
//     }
//   }
//   return matrix
// }
// //If row[i] is 0 (falsy) and col[j] is 0 (falsy), the condition is false.
// //If row[i] is 1 (truthy) or col[j] is 1 (truthy), the condition is true.

// const matrix = [[1, 1, 1], [1, 0, 1], [1, 1, 1]];
// const ans = zeroMatrix(matrix);

// console.log("The Final matrix is:");
// for (const row of ans) {
//     console.log(row.join(" "));
// }  

// ---------------Optimal solution ---------------------//

function zeroMatrix(matrix) {
  const n = matrix.length;
  const m = matrix[0].length;

  let col0 = 1;
  // Step 1: Traverse the matrix and mark 1st row & col accordingly:
  for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
          if (matrix[i][j] === 0) {
              // Mark i-th row:
              matrix[i][0] = 0;

              // Mark j-th column:
              if (j !== 0) {
                  matrix[0][j] = 0;
                  // matrix[0] is for row 0 and j is for column 
              } else {
                // if j is equals to 0 then mark in col0
                  col0 = 0;
              }
          }
      }
  }

  // Step 2: Mark with 0 from (1,1) to (n-1, m-1):
  for (let i = 1; i < n; i++) {
      for (let j = 1; j < m; j++) {
          if (matrix[i][j] !== 0) {
            // we only check when the matrix is not equal to zero
              // Check for col & row:
              if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                  matrix[i][j] = 0;
              }
          }
      }
  }

  // Step 3: Finally mark the 1st col & then 1st row:
  if (matrix[0][0] === 0) {
      for (let j = 0; j < m; j++) {
          matrix[0][j] = 0;
      }
  }
  if (col0 === 0) {
      for (let i = 0; i < n; i++) {
          matrix[i][0] = 0;
      }
  }

  return matrix;
}

const matrix = [[1, 1, 1], [1, 0, 1], [1, 1, 1]];
const ans = zeroMatrix(matrix);

console.log("The Final matrix is:");
for (const row of ans) {
  console.log(row.join(" "));
}    

