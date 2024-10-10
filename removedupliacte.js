var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;
    
    let k = 1; // start with the first element as unique
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }
    
    return k;
}

// Example usage:
const nums = [1, 1, 2, 2, 3,4,3];
const k = removeDuplicates(nums);
console.log(k); // Output: 3
console.log(nums.slice(0, k)); // Output: [1, 2, 3]