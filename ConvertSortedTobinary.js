// Definition for a binary tree node.
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

// Function to convert sorted array to BST
var sortedArrayToBST = function(nums) {
    const helper = (start, end) => {
        if (start > end) {
            return null;
        }
        const mid = Math.floor((start + end) / 2);
        const root = new TreeNode(nums[mid]);
        root.left = helper(start, mid - 1);
        root.right = helper(mid + 1, end);
        return root;
    };

    return helper(0, nums.length - 1);
};

// Function to print the tree in a structured way
const printTree = (node, prefix = "", isLeft = true) => {
    if (node === null) {
        return;
    }

    if (node.right !== null) {
        printTree(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }

    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.val}`);

    if (node.left !== null) {
        printTree(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
};

// Example usage
let nums = [-10, -3, 0, 5, 9];
let result = sortedArrayToBST(nums);
console.log("The BST is:");
printTree(result);


/**
 ### Explanation

The provided code converts a sorted array into a height-balanced binary search tree (BST). The key idea is to use the middle element of the array (or subarray) as the root of the BST, and recursively do the same for the left and right subarrays.

### Code Breakdown

1. **Function Definition**:
   - `var sortedArrayToBST = function(nums)` defines the main function that takes a sorted array `nums` as input and returns the root of the BST.

2. **Helper Function**:
   - `const helper = (start, end)` is a recursive function that constructs the BST from the subarray `nums[start...end]`.
   - **Base Case**: If `start > end`, the function returns `null`, indicating that there's no element to form a node.

3. **Recursive Case**:
   - **Find Middle**: `const mid = Math.floor((start + end) / 2)` calculates the middle index of the current subarray.
   - **Create Node**: `const root = new TreeNode(nums[mid])` creates a new tree node with the middle element as its value.
   - **Build Left Subtree**: `root.left = helper(start, mid - 1)` recursively constructs the left subtree from the left half of the current subarray.
   - **Build Right Subtree**: `root.right = helper(mid + 1, end)` recursively constructs the right subtree from the right half of the current subarray.
   - **Return Root**: Finally, the function returns the `root` node, which is the root of the BST for the current subarray.

4. **Initial Call**:
   - The initial call `return helper(0, nums.length - 1)` starts the recursion with the entire array.

### Dry Run

Let's dry run the code with an example:
- `nums = [-10, -3, 0, 5, 9]`

1. **Initial Call**:
   - `helper(0, 4)`

2. **First Level of Recursion**:
   - `mid = Math.floor((0 + 4) / 2) = 2`
   - Create `root` node with value `0`
   - Build left subtree: `helper(0, 1)`
   - Build right subtree: `helper(3, 4)`

3. **Second Level (Left Subtree)**:
   - `helper(0, 1)`
   - `mid = Math.floor((0 + 1) / 2) = 0`
   - Create `root` node with value `-10`
   - Build left subtree: `helper(0, -1)` → returns `null`
   - Build right subtree: `helper(1, 1)`

4. **Third Level (Left Subtree)**:
   - `helper(1, 1)`
   - `mid = Math.floor((1 + 1) / 2) = 1`
   - Create `root` node with value `-3`
   - Build left subtree: `helper(1, 0)` → returns `null`
   - Build right subtree: `helper(2, 1)` → returns `null`
   - `root.left = null`, `root.right = null`

5. **Back to Second Level**:
   - `-10` node's left subtree is `null` and right subtree is `-3`

6. **Second Level (Right Subtree)**:
   - `helper(3, 4)`
   - `mid = Math.floor((3 + 4) / 2) = 3`
   - Create `root` node with value `5`
   - Build left subtree: `helper(3, 2)` → returns `null`
   - Build right subtree: `helper(4, 4)`

7. **Third Level (Right Subtree)**:
   - `helper(4, 4)`
   - `mid = Math.floor((4 + 4) / 2) = 4`
   - Create `root` node with value `9`
   - Build left subtree: `helper(4, 3)` → returns `null`
   - Build right subtree: `helper(5, 4)` → returns `null`
   - `root.left = null`, `root.right = null`

8. **Back to Second Level**:
   - `5` node's left subtree is `null` and right subtree is `9`

9. **Final BST**:
   - The final BST structure:
     ```
         0
        / \
      -10  5
        \   \
        -3   9
     ```

### Summary

The code efficiently constructs a height-balanced BST by repeatedly choosing the middle element of the current subarray as the root. This ensures that the tree remains balanced, with approximately equal numbers of nodes in the left and right subtrees at each level of recursion.
 */