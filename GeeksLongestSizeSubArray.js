// brute force appraoch
// function getLongestSubarray(a, k) {
//     let n = a.length; // size of the array

//     let len = 0;
//     for (let i = 0; i < n; i++) { // starting index
//         for (let j = i; j < n; j++) { // ending index
//             // add all the elements of subarray = a[i...j]
//             let s = 0;
//             for (let K = i; K <= j; K++) {
//                 s += a[K];
//             }

//             if (s === k)
//                 len = Math.max(len, j - i + 1);
//         }
//     }
//     return len;
// }

// let a = [1,2, 3, 5, 1, 9];
// let k = 10;
// let len = getLongestSubarray(a, k);
// console.log("The length of the longest subarray is:", len);


// Better appraoch
// function getLongestSubarray(a, k) {
//     let n = a.length; // size of the array

//     let len = 0;
//     for (let i = 0; i < n; i++) { // starting index
//         let s = 0; // Sum variable
//         for (let j = i; j < n; j++) { // ending index
//             // add the current element to
//             // the subarray a[i...j-1]
//             s += a[j];

//             if (s === k)
//                 len = Math.max(len, j - i + 1);
//         }
//     }
//     return len;
// }

// let a = [2, 3, 5, 1, 9];
// let k = 10;
// let len = getLongestSubarray(a, k);
// console.log("The length of the longest subarray is:", len);

//----------------better solution by hashing ----------------//

// function getLongestSubarray(a, k) {
//     let n = a.length; // size of the array

//     let preSumMap = new Map();
//     let sum = 0;
//     let maxLen = 0;
//     for (let i = 0; i < n; i++) {
//         // calculate the prefix sum till index i
//         sum += a[i];

//         // if the sum = k, update the maxLen
//         if (sum === k) {
//             maxLen = Math.max(maxLen, i + 1);
//             // len at index 0 is 1 then index 1 for 2 
//         }

//         // calculate the sum of remaining part i.e. x - k
//         let rem = sum - k;

//         // calculate the length and update maxLen
//         if (preSumMap.has(rem)) {
//             // for calculating the length
//             // check your copy where 2-(0+1)=1 
//             let len = i - preSumMap.get(rem);
//             maxLen = Math.max(maxLen, len);
//         }
//         // update the map checking the conditions
//         // if we dont have the presum like 1,0 then we have 3,1 then we have 6,2 in hashmap
//         // so store it with the values
//         if (!preSumMap.has(sum)) {
//             preSumMap.set(sum, i);
//         }
//     }

//     return maxLen;
// }

// let a = [2, 3, 5, 1, 9];
// let k = 10;
// let len = getLongestSubarray(a, k);
// console.log("The length of the longest subarray is:", len);



// -------------------2 Pointer approach or best Solution -----------------//



function getLongestSubarray(a, k) {
    let n = a.length; // size of the array

    let left = 0, right = 0; // 2 pointers
    let sum = a[0];
    let maxLen = 0;
    while (right < n) {
        // if sum > k, reduce the subarray from left
        // until sum becomes less or equal to k
        while (left <= right && sum > k) {
            //if sum is greater then the k , then we should update the left
            // and reduce the left value by the sum , like this is the trim process
            sum -= a[left];
            left++;
        }

        // if sum = k, update the maxLen i.e. answer
        if (sum === k) {
            maxLen = Math.max(maxLen, right - left + 1);
        }

        // Move forward the right pointer
        // first we move to the 1 index by doing right++ then store the value in it
        // and make the check that it should not exceed the limit to the end 
        right++;
        if (right < n) sum += a[right];
    }

    return maxLen;
}

let a = [2, 3, 5, 1, 9];
let k = 10;
let len = getLongestSubarray(a, k);
console.log("The length of the longest subarray is:", len);





