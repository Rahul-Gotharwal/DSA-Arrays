// function merge(arr1, arr2, n, m) {

//     //Declare a 3rd array and 2 pointers:
//     let arr3 = new Array(n + m);
//     let left = 0;
//     let right = 0;

//     let index = 0;

//     //Insert the elements from the 2 arrays
//     // into the 3rd array using left and right
//     // pointers:

//     while (left < n && right < m) {
//         if (arr1[left] <= arr2[right]) {
//             arr3[index] = arr1[left];
//             left++, index++;
//         }
//         else {
//             arr3[index] = arr2[right];
//             right++, index++;
//         }
//     }

//     // If left pointer reaches the end:
//     while (left < n) {
//         arr3[index++] = arr1[left++];
//     }

//     // If right pointer reaches the end:
//     while (right < m) {
//         arr3[index++] = arr2[right++];
//     }

//     // Fill back the elements from arr3[]
//     // to arr1[] and arr2[]:
//     for (let i = 0; i < n + m; i++) {
//         if (i < n) arr1[i] = arr3[i];
//         else arr2[i - n] = arr3[i];
//     }
// }

// let arr1 = [1, 4, 8, 10];
// let arr2 = [2, 3, 9];
// let n = 4, m = 3;
// merge(arr1, arr2, n, m);
// console.log("The merged arrays are: ");
// console.log("arr1[] = " + arr1.join(" "));
// console.log("arr2[] = " + arr2.join(" "));

/*
### Explanation of the Code

The given code merges two sorted arrays `arr1` and `arr2` into a single sorted array and then splits the result back into `arr1` and `arr2`. Here's a step-by-step explanation of how the code works:

1. **Initialization**:
   - `arr3`: A temporary array to hold the merged result of `arr1` and `arr2`.
   - `left`: A pointer to traverse `arr1`.
   - `right`: A pointer to traverse `arr2`.
   - `index`: A pointer to insert elements into `arr3`.

2. **Merging Process**:
   - The code compares elements from `arr1` and `arr2` using `left` and `right` pointers.
   - The smaller element is inserted into `arr3`, and the corresponding pointer (`left` or `right`) and the `index` are incremented.
   - This process continues until one of the pointers (`left` or `right`) reaches the end of its respective array.

3. **Remaining Elements**:
   - If `right` reaches the end of `arr2`, the remaining elements of `arr1` are copied to `arr3`.
   - If `left` reaches the end of `arr1`, the remaining elements of `arr2` are copied to `arr3`.

4. **Copying Back to `arr1` and `arr2`**:
   - The merged elements from `arr3` are copied back to `arr1` and `arr2`.
   - The first `n` elements of `arr3` go to `arr1`, and the remaining `m` elements go to `arr2`.

### Dry Run

Let's dry run the code with the given example:
- `arr1 = [1, 4, 8, 10]`
- `arr2 = [2, 3, 9]`
- `n = 4`
- `m = 3`

1. **Initialization**:
   - `arr3 = [ ]` (empty array of size `n + m = 7`)
   - `left = 0`
   - `right = 0`
   - `index = 0`

2. **Merging Process**:
   - Compare `arr1[left]` (1) and `arr2[right]` (2):
     - `1 <= 2`, so `arr3[0] = 1`, `left = 1`, `index = 1`
   - Compare `arr1[left]` (4) and `arr2[right]` (2):
     - `4 > 2`, so `arr3[1] = 2`, `right = 1`, `index = 2`
   - Compare `arr1[left]` (4) and `arr2[right]` (3):
     - `4 > 3`, so `arr3[2] = 3`, `right = 2`, `index = 3`
   - Compare `arr1[left]` (4) and `arr2[right]` (9):
     - `4 <= 9`, so `arr3[3] = 4`, `left = 2`, `index = 4`
   - Compare `arr1[left]` (8) and `arr2[right]` (9):
     - `8 <= 9`, so `arr3[4] = 8`, `left = 3`, `index = 5`
   - Compare `arr1[left]` (10) and `arr2[right]` (9):
     - `10 > 9`, so `arr3[5] = 9`, `right = 3`, `index = 6`

3. **Remaining Elements**:
   - `right` has reached the end of `arr2`, so copy the remaining elements of `arr1`:
     - `arr3[6] = 10`, `left = 4`, `index = 7`

4. **Copying Back to `arr1` and `arr2`**:
   - `arr3 = [1, 2, 3, 4, 8, 9, 10]`
   - Copy to `arr1`:
     - `arr1[0] = 1`, `arr1[1] = 2`, `arr1[2] = 3`, `arr1[3] = 4`
     - `arr1 = [1, 2, 3, 4]`
   - Copy to `arr2`:
     - `arr2[0] = 8`, `arr2[1] = 9`, `arr2[2] = 10`
     - `arr2 = [8, 9, 10]`

### Final Output

- `arr1 = [1, 2, 3, 4]`
- `arr2 = [8, 9, 10]`

This output matches the expected result after merging and splitting back the arrays.

*/

// ---------------First Optimal solution------------------//

// NOTE _ This is not work if there is zeros in the array 
// test case is not pass in the leetcode

// function merge(arr1, arr2, n, m) {

//     //Declare 2 pointers:
//     let left = n - 1;
//     let right = 0;

//     //Swap the elements until arr1[left] is
//     // smaller than arr2[right]:
//     while (left >= 0 && right < m) {
//         if (arr1[left] > arr2[right]) {
//             [arr1[left], arr2[right]] = [arr2[right], arr1[left]];
//             left--, right++;
//         }
//         else {
//             break;
//         }
//     }

//     // Sort arr1[] and arr2[] individually:
//     arr1.sort((a, b) => a - b);
//     arr2.sort((a, b) => a - b);
// }

// let arr1 = [1, 4, 8, 10];
// let arr2 = [2, 3, 9];
// let n = 4, m = 3;
// merge(arr1, arr2, n, m);
// console.log("The merged arrays are: ");
// console.log("arr1[] = " + arr1.join(' '));
// console.log("arr2[] = " + arr2.join(' '));

/*
### Explanation of the Code

The provided code merges two sorted arrays `arr1` and `arr2` by using a different approach:

1. **Initialization**:
   - `left` is initialized to the last index of `arr1` (i.e., `n - 1`).
   - `right` is initialized to the first index of `arr2` (i.e., `0`).

2. **Swapping Process**:
   - The code swaps elements from `arr1` and `arr2` while `arr1[left]` is greater than `arr2[right]`.
   - After each swap, `left` is decremented, and `right` is incremented.
   - This ensures that the largest elements in `arr1` are moved to `arr2` and the smallest elements in `arr2` are moved to `arr1`.

3. **Sorting**:
   - After swapping, `arr1` and `arr2` are individually sorted to maintain the order.

### Dry Run

Let's dry run the code with the given example:
- `arr1 = [1, 4, 8, 10]`
- `arr2 = [2, 3, 9]`
- `n = 4`
- `m = 3`

1. **Initialization**:
   - `left = 3` (points to `10` in `arr1`)
   - `right = 0` (points to `2` in `arr2`)

2. **Swapping Process**:
   - **First Iteration**:
     - Compare `arr1[left]` (10) and `arr2[right]` (2):
       - `10 > 2`, so swap `arr1[left]` and `arr2[right]`.
       - `arr1 = [1, 4, 8, 2]`
       - `arr2 = [10, 3, 9]`
       - Update pointers: `left = 2`, `right = 1`
   - **Second Iteration**:
     - Compare `arr1[left]` (8) and `arr2[right]` (3):
       - `8 > 3`, so swap `arr1[left]` and `arr2[right]`.
       - `arr1 = [1, 4, 3, 2]`
       - `arr2 = [10, 8, 9]`
       - Update pointers: `left = 1`, `right = 2`
   - **Third Iteration**:
     - Compare `arr1[left]` (4) and `arr2[right]` (9):
       - `4 < 9`, so no swap, and break the loop.

3. **Sorting**:
   - Sort `arr1`:
     - `arr1 = [1, 2, 3, 4]`
   - Sort `arr2`:
     - `arr2 = [8, 9, 10]`

### Final Output

- `arr1 = [1, 2, 3, 4]`
- `arr2 = [8, 9, 10]`

### Detailed Dry Run Steps

**Initialization**:
- `arr1 = [1, 4, 8, 10]`
- `arr2 = [2, 3, 9]`
- `n = 4`, `m = 3`
- `left = 3`, `right = 0`

**First Iteration**:
- Compare `arr1[3]` (10) and `arr2[0]` (2):
  - `10 > 2`
  - Swap: `arr1[3] <-> arr2[0]`
  - `arr1 = [1, 4, 8, 2]`
  - `arr2 = [10, 3, 9]`
  - Update pointers: `left = 2`, `right = 1`

**Second Iteration**:
- Compare `arr1[2]` (8) and `arr2[1]` (3):
  - `8 > 3`
  - Swap: `arr1[2] <-> arr2[1]`
  - `arr1 = [1, 4, 3, 2]`
  - `arr2 = [10, 8, 9]`
  - Update pointers: `left = 1`, `right = 2`

**Third Iteration**:
- Compare `arr1[1]` (4) and `arr2[2]` (9):
  - `4 < 9`
  - No swap, break the loop

**Sorting**:
- Sort `arr1`: `[1, 2, 3, 4]`
- Sort `arr2`: `[8, 9, 10]`

**Final Output**:
- `arr1 = [1, 2, 3, 4]`
- `arr2 = [8, 9, 10]`

This output matches the expected result after the merging and sorting process.

*/

//----------------2nd optimal solution with gap method--------------//




// function swapIfGreater(arr1, arr2, ind1, ind2) {
//     if (arr1[ind1] > arr2[ind2]) {
//       [arr1[ind1], arr2[ind2]] = [arr2[ind2], arr1[ind1]];
//     }
//   }
  
//   function merge(arr1, arr2, n, m) {
//     const len = n + m;
//     let gap = Math.ceil(len / 2);
  
//     while (gap > 0) {
//       let left = 0;
//       let right = left + gap;
  
//       while (right < len) {
//         if (left < n && right >= n) {
//           swapIfGreater(arr1, arr2, left, right - n);
//         } else if (left >= n) {
//           swapIfGreater(arr2, arr2, left - n, right - n);
//         } else {
//           swapIfGreater(arr1, arr1, left, right);
//         }
//         left++, right++;
//       }
  
//       if (gap == 1) break;
  
//       gap = Math.ceil(gap / 2);
//     }
//   }
  
//   const arr1 = [1, 4, 8, 10];
//   const arr2 = [2, 3, 9];
//   const n = 4, m = 3;
  
//   merge(arr1, arr2, n, m);
  
//   console.log("The merged arrays are:");
//   console.log(`arr1[] = ${arr1.join(" ")}`);
//   console.log(`arr2[] = ${arr2.join(" ")}`);
  
  /*
### Explanation

This code merges two sorted arrays `arr1` and `arr2` using the **gap algorithm** inspired by the Shell Sort algorithm. The key idea is to compare and swap elements that are a certain "gap" apart, gradually reducing the gap until it becomes 1.

1. **swapIfGreater**: Helper function to swap elements between `arr1` and `arr2` if the element in `arr1` is greater.
2. **merge**: Main function to merge `arr1` and `arr2`.
   - **Initialization**:
     - Calculate the total length `len` of both arrays combined.
     - Start with a `gap` equal to half of `len`, rounded up.
   - **Gap Reduction Loop**:
     - While `gap` is greater than 0, iterate over the arrays and compare elements that are `gap` apart.
     - Adjust the pointers `left` and `right` and perform swaps if necessary.
     - Reduce the `gap` by half, rounding up.

### Dry Run

Let's dry run with the given arrays:
- `arr1 = [1, 4, 8, 10]`
- `arr2 = [2, 3, 9]`
- `n = 4`, `m = 3`

1. **Initialization**:
   - `len = 7`
   - `gap = Math.ceil(7 / 2) = 4`

2. **First Iteration with gap = 4**:
   - `left = 0`, `right = 4`
   - Compare `arr1[0]` (1) with `arr2[0]` (2): No swap
   - `left = 1`, `right = 5`
   - Compare `arr1[1]` (4) with `arr2[1]` (3): Swap → `arr1 = [1, 3, 8, 10]`, `arr2 = [2, 4, 9]`
   - `left = 2`, `right = 6`
   - Compare `arr1[2]` (8) with `arr2[2]` (9): No swap
   - `left = 3`, `right = 7` (out of bounds)

   - Reduce `gap = Math.ceil(4 / 2) = 2`

3. **Second Iteration with gap = 2**:
   - `left = 0`, `right = 2`
   - Compare `arr1[0]` (1) with `arr1[2]` (8): No swap
   - `left = 1`, `right = 3`
   - Compare `arr1[1]` (3) with `arr1[3]` (10): No swap
   - `left = 2`, `right = 4`
   - Compare `arr1[2]` (8) with `arr2[0]` (2): Swap → `arr1 = [1, 3, 2, 10]`, `arr2 = [8, 4, 9]`
   - `left = 3`, `right = 5`
   - Compare `arr1[3]` (10) with `arr2[1]` (4): Swap → `arr1 = [1, 3, 2, 4]`, `arr2 = [8, 10, 9]`
   - `left = 4`, `right = 6`
   - Compare `arr2[0]` (8) with `arr2[2]` (9): No swap
   - `left = 5`, `right = 7` (out of bounds)

   - Reduce `gap = Math.ceil(2 / 2) = 1`

4. **Third Iteration with gap = 1**:
   - `left = 0`, `right = 1`
   - Compare `arr1[0]` (1) with `arr1[1]` (3): No swap
   - `left = 1`, `right = 2`
   - Compare `arr1[1]` (3) with `arr1[2]` (2): Swap → `arr1 = [1, 2, 3, 4]`, `arr2 = [8, 10, 9]`
   - `left = 2`, `right = 3`
   - Compare `arr1[2]` (3) with `arr1[3]` (4): No swap
   - `left = 3`, `right = 4`
   - Compare `arr1[3]` (4) with `arr2[0]` (8): No swap
   - `left = 4`, `right = 5`
   - Compare `arr2[0]` (8) with `arr2[1]` (10): No swap
   - `left = 5`, `right = 6`
   - Compare `arr2[1]` (10) with `arr2[2]` (9): Swap → `arr1 = [1, 2, 3, 4]`, `arr2 = [8, 9, 10]`
   - `left = 6`, `right = 7` (out of bounds)

   - `gap = 1` and break

**Final Output**:
- `arr1 = [1, 2, 3, 4]`
- `arr2 = [8, 9, 10]`

The arrays have been successfully merged and sorted.
   */


//---same as 1 optimal solution but 1 optimal  not handle the edge case of zero----------//
function merge(nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1; // NOTE here j also start from last 
    let k = m + n - 1;

    // Merge nums1 and nums2 from the end
    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k--] = nums1[i--];
        } else {
            nums1[k--] = nums2[j--];
        }
    }

    // If there are remaining elements in nums2, copy them
    while (j >= 0) {
        nums1[k--] = nums2[j--];
    }
}
let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];
let m = 3, n = 3;

merge(nums1, m, nums2, n);
console.log("The merged array is: ");
console.log("nums1 = " + nums1.join(' '));

/**
 The provided code for merging two sorted arrays `arr1` and `arr2` isn't designed to handle the specific constraints of the problem on LeetCode, where `arr1` has extra space at the end to accommodate all elements from both arrays. Here's the corrected approach for merging the two arrays in-place, specifically designed to handle the LeetCode test cases:

### Corrected Approach

1. **Initialization**:
   - Use three pointers:
     - `i` for the last element in the initial portion of `arr1`.
     - `j` for the last element in `arr2`.
     - `k` for the last position in `arr1` (which includes the extra space).

2. **Merging Process**:
   - Compare elements from the end of `arr1` and `arr2` and place the larger element at the end of `arr1`.
   - Continue this process until all elements from `arr2` are placed in `arr1`.

3. **Edge Cases**:
   - If there are remaining elements in `arr2` after `arr1` is exhausted, copy them directly into `arr1`.

Here is the corrected code:

```javascript
function merge(nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;

    // Merge nums1 and nums2 from the end
    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k--] = nums1[i--];
        } else {
            nums1[k--] = nums2[j--];
        }
    }

    // If there are remaining elements in nums2, copy them
    while (j >= 0) {
        nums1[k--] = nums2[j--];
    }
}

let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];
let m = 3, n = 3;

merge(nums1, m, nums2, n);
console.log("The merged array is: ");
console.log("nums1 = " + nums1.join(' '));
```

### Explanation of the Code

1. **Initialization**:
   - `i` starts at `m - 1` (the last index of the initial portion of `nums1`).
   - `j` starts at `n - 1` (the last index of `nums2`).
   - `k` starts at `m + n - 1` (the last index of `nums1`).

2. **Merging Process**:
   - Compare `nums1[i]` and `nums2[j]`. Place the larger value at `nums1[k]`.
   - Decrement the pointers (`i`, `j`, `k`) accordingly.
   - Continue until one of the arrays is exhausted.

3. **Remaining Elements**:
   - If `nums2` still has remaining elements, copy them directly into the remaining positions of `nums1`.

### Dry Run

**Initial Values**:
- `nums1 = [1, 2, 3, 0, 0, 0]`
- `nums2 = [2, 5, 6]`
- `m = 3`
- `n = 3`

**Iteration**:
- `i = 2`, `j = 2`, `k = 5`
  - Compare `nums1[2]` (3) and `nums2[2]` (6)
  - Place `6` at `nums1[5]`: `nums1 = [1, 2, 3, 0, 0, 6]`
  - Update `j = 1`, `k = 4`

- `i = 2`, `j = 1`, `k = 4`
  - Compare `nums1[2]` (3) and `nums2[1]` (5)
  - Place `5` at `nums1[4]`: `nums1 = [1, 2, 3, 0, 5, 6]`
  - Update `j = 0`, `k = 3`

- `i = 2`, `j = 0`, `k = 3`
  - Compare `nums1[2]` (3) and `nums2[0]` (2)
  - Place `3` at `nums1[3]`: `nums1 = [1, 2, 3, 3, 5, 6]`
  - Update `i = 1`, `k = 2`

- `i = 1`, `j = 0`, `k = 2`
  - Compare `nums1[1]` (2) and `nums2[0]` (2)
  - Place `2` at `nums1[2]`: `nums1 = [1, 2, 2, 3, 5, 6]`
  - Update `j = -1`, `k = 1`

**Copy Remaining**:
- `j = -1`, loop terminates

**Final Output**:
- `nums1 = [1, 2, 2, 3, 5, 6]`

This approach ensures the arrays are merged in-place with minimal additional space, and it handles the constraints provided by the LeetCode problem effectively.
 */