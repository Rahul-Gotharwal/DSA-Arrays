// upper bound and lower bound
// function lowerBound(arr, n, x) {
//     let low = 0;
//     let high = n - 1;
//     let ans = n;
//     while (low <= high) {
//         let mid = Math.floor((low + high) / 2);

//         // maybe an answer
//         if (arr[mid] >= x) {
//             ans = mid;
//             // look for a smaller index on the left
//             high = mid - 1;
//         } else {
//             low = mid + 1;
//         }
//     }
//     return ans;
// }
// function upperBound(arr, n, x) {
//     let low = 0;
//     let high = n - 1;
//     let ans = n;
//     while (low <= high) {
//         let mid = Math.floor((low + high) / 2);

//         // maybe an answer
//         if (arr[mid] > x) {
//             ans = mid;
//             // look for a smaller index on the left
//             high = mid - 1;
//         } else {
//             low = mid + 1;
//         }
//     }
//     return ans;
// }
// function firstAndLastPosition(arr, n, x) {
//     let lb = lowerBound(arr, n, x);  
//     if (lb == n || arr[lb] !== x) return [-1, -1];
//     return [lb, upperBound(arr, n, x) - 1];
//     // why we write lb [lb, upperBound(arr, n, x) - 1]; because it founds the range from start to where the last index 
// }

// // Example usage:
// const arr = [1, 2, 2, 2, 3, 4, 5];
// const n = arr.length;  
// const x = 2;
// const result = firstAndLastPosition(arr, n, x);
// console.log(result); // Output: [1, 3]


// binary serach approach or most potimal apporach

// for first occurences
function findFirstOccurrence(arr, n, x) {
    let low = 0;
    let high = n - 1;
    let first = -1;
    
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        
        if (arr[mid] === x) {
            first = mid;
            high = mid - 1; // Continue searching in the left half
        } else if (arr[mid] < x) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    
    return first;
}
function findLastOccurrence(arr, n, x) {
    let low = 0;
    let high = n - 1;
    let last = -1;
    
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        
        if (arr[mid] === x) {
            last = mid;
            low = mid + 1; // Continue searching in the right half
        } else if (arr[mid] < x) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    
    return last;
}
var searchRange = function(nums, target) {
    const n = nums.length;
    const first = findFirstOccurrence(nums, n, target);
    const last = findLastOccurrence(nums, n, target);
    
    return [first, last];
};

// Example usage:
const nums = [1, 2, 2, 2, 3, 4, 5];
const target = 2;
const result = searchRange(nums, target);
console.log(result); // Output: [1, 3]
