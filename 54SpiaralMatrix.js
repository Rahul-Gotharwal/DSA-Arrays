function printSpiral(mat) {
    // Define ans array to store the result.
    let ans = [];
  
    // Determine the number of rows and columns
    let n = mat.length; // no. of rows
    let m = mat[0].length; // no. of columns
  
    // Initialize the pointers required for traversal.
    let top = 0,
      left = 0,
      bottom = n - 1,
      right = m - 1;
  
    // Loop until all elements are not traversed.
    while (top <= bottom && left <= right) {
      // For moving left to right
      for (let i = left; i <= right; i++){
      ans.push(mat[top][i]);
      } // top will become 1 only once because it is outside the loop , once all the values are put into the array then it is incremenet by one
      top++;
      //NOTE- After Doing top++ top will 1 and it becomes 0 to 1 so above loop is start from 1 
      // means all the elements are first push into the ans , then top will +1 only once 
      // For moving top to bottom.
      for (let i = top; i <= bottom; i++) ans.push(mat[i][right]);
      // here it is one line statemnt so thats why we dont use {} and right-- will minus by one only once not everytime
      right--;
  
      // For moving right to left.
      if (top <= bottom) {
        for (let i = right; i >= left; i--) ans.push(mat[bottom][i]);
        bottom--;
      }
  
      // For moving bottom to top.
      if (left <= right) {
        for (let i = bottom; i >= top; i--) ans.push(mat[i][left]);
        left++;
      }
    }
    return ans;
  }
  // Matrix initialization.
  let mat = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ];
  
  let ans = printSpiral(mat);
  
  // Print the spiral order
  console.log(ans.join(" "));
  

  /**
   * 
   * Let's dry run the code and analyze the behavior, particularly focusing on whether the `right` pointer remains constant during the second loop (top to bottom traversal).

### Dry Run

#### Initialization
```javascript
let mat = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
```
- `n = mat.length = 4` (number of rows)
- `m = mat[0].length = 4` (number of columns)
- `top = 0`
- `left = 0`
- `bottom = n - 1 = 3`
- `right = m - 1 = 3`
- `ans = []`

#### Loop Iterations

1. **First Iteration** (top: 0, left: 0, bottom: 3, right: 3)
   - **Left to Right**: 
     - `mat[top][i]` for `i` from `left` to `right`:
       - `mat[0][0] = 1`, `mat[0][1] = 2`, `mat[0][2] = 3`, `mat[0][3] = 4`
     - `ans = [1, 2, 3, 4]`
     - `top++ => top = 1`
   - **Top to Bottom**:
     - `mat[i][right]` for `i` from `top` to `bottom`:
       - `mat[1][3] = 8`, `mat[2][3] = 12`, `mat[3][3] = 16`
     - `ans = [1, 2, 3, 4, 8, 12, 16]`
     - `right-- => right = 2`
   - **Right to Left** (if `top <= bottom`):
     - `mat[bottom][i]` for `i` from `right` to `left`:
       - `mat[3][2] = 15`, `mat[3][1] = 14`, `mat[3][0] = 13`
     - `ans = [1, 2, 3, 4, 8, 12, 16, 15, 14, 13]`
     - `bottom-- => bottom = 2`
   - **Bottom to Top** (if `left <= right`):
     - `mat[i][left]` for `i` from `bottom` to `top`:
       - `mat[2][0] = 9`, `mat[1][0] = 5`
     - `ans = [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5]`
     - `left++ => left = 1`

2. **Second Iteration** (top: 1, left: 1, bottom: 2, right: 2)
   - **Left to Right**:
     - `mat[top][i]` for `i` from `left` to `right`:
       - `mat[1][1] = 6`, `mat[1][2] = 7`
     - `ans = [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7]`
     - `top++ => top = 2`
   - **Top to Bottom**:
     - `mat[i][right]` for `i` from `top` to `bottom`:
       - `mat[2][2] = 11`
     - `ans = [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11]`
     - `right-- => right = 1`
   - **Right to Left** (if `top <= bottom`):
     - `mat[bottom][i]` for `i` from `right` to `left`:
       - `mat[2][1] = 10`
     - `ans = [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]`
     - `bottom-- => bottom = 1`

Since `top (2)` is now greater than `bottom (1)` and `left (1)` is equal to `right (1)`, the loop ends.

### Final Output
```javascript
console.log(ans.join(" "));
// Output: "1 2 3 4 8 12 16 15 14 13 9 5 6 7 11 10"
```

### Analysis of the `right` Pointer in the Top to Bottom Loop

In the second loop (`for (let i = top; i <= bottom; i++) ans.push(mat[i][right]);`), the `right` pointer is constant for that particular iteration. It moves only once after the entire top to bottom traversal is complete. Here's how:

- Before the loop: `right = 3`
- During the loop, `right` is constant and points to the last column.
- After the loop, `right--` decreases the `right` pointer by 1.

So, the `right` pointer is indeed constant during the second loop of each iteration.

### Summary
The given code works correctly for printing the matrix in a spiral order. The `right` pointer remains constant during each top-to-bottom traversal but moves leftward by one position after completing the traversal. The final output is correct and prints the matrix elements in spiral order.
   */