// in this we should return the unique value also like values that are occurs multiple times not like problme o. 349
//To correct the code, we need to account for multiple occurrences of the same number in both arrays without assuming the arrays are sorted. Here’s the corrected approach:
//Count the occurrences of each element in both arrays using hash maps.
//Determine the minimum count of each common element in both arrays.
//Construct the result array based on these counts.
//----------- chat gpt solution------------------//
function intersect(nums1, nums2) {
    let map1 = new Map();
    let map2 = new Map();
    
    // Count occurrences in nums1
    for (let num of nums1) {
        map1.set(num, (map1.get(num) || 0) + 1);
        // it is zero means it is not occur in the map till now , then we add one to it and start counting it like(4,1)
    }
    
    // Count occurrences in nums2
    for (let num of nums2) {
        map2.set(num, (map2.get(num) || 0) + 1);
    }
    
    let ans = [];
    
    // Find the intersection
    for (let [num, count] of map1.entries()) {
        if (map2.has(num)) {
            let minCount = Math.min(count, map2.get(num));
            //map2.get(num) it will return the count of 2nd array
            for (let i = 0; i < minCount; i++) {
                ans.push(num);
            }
        }
    }
    
    return ans;
}

// Example usage
let nums1 =  [4, 9, 5];
let nums2 = [9, 4, 9, 8, 4]
console.log(intersect(nums1, nums2)); // Output: [4, 9]

