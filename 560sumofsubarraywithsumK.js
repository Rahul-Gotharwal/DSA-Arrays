//The original function you provided was designed to count subarrays with an exact sum, but the problem requires finding the minimal length of a subarray whose sum is greater than or equal to the target. Let's address this by focusing on the correct approach using the sliding window technique.
//this function is count the subarray with exact sum
function findAllSubarraysWithGivenSum(arr, k) {
    let n = arr.length; // size of the given array.
    let mpp = new Map();
    let preSum = 0, cnt = 0;

    mpp.set(0, 1); // Setting 0 in the map.
    for (let i = 0; i < n; i++) {
        // add current element to prefix Sum:
        preSum += arr[i];

        // Calculate preSum - k:
        let remove = preSum - k;

        // Add the number of subarrays to be removed:
        if (mpp.has(remove)) {
            cnt += mpp.get(remove);
        }

        // Update the count of prefix sum in the map.
        if (mpp.has(preSum)) {
            mpp.set(preSum, mpp.get(preSum) + 1);
        } else {
            mpp.set(preSum, 1);
        }
    }
    return cnt;
}

// Example usage:
let arr = [3, 1, 2, 4];
let k = 6;
let cnt = findAllSubarraysWithGivenSum(arr, k);
console.log("The number of subarrays is: " + cnt);


