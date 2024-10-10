
// Brute Force Approach

// function getSingleElement(arr) {
//     // Size of the array:
//     const n = arr.length;
  
//     // Run a loop for selecting elements:
//     for (let i = 0; i < n; i++) {
//       const num = arr[i]; // selected element
//       let cnt = 0;
  
//       // Find the occurrence using linear search:
//       for (let j = 0; j < n; j++) {
//         if (arr[j] === num) {
//           cnt++;
//         }
//       }
  
//       // If the occurrence is 1, return the number:
//       if (cnt === 1) {
//         return num;
//       }
//     }
  
//     // This line will never execute
//     // if the array contains a single element.
//     return -1;
//   }
  
//   function main() {
//     const arr = [4, 1, 2, 1, 2];
//     const ans = getSingleElement(arr);
//     console.log("The single element is:", ans);
//   }
//   main();

// Better Appraoch-1

// function getSingleElement(arr , N) {
//     // Size of the array:
//     let n = arr.length;
//     let hash = new Array(N+1).fill(0);
//     for (let i = 0; i < n; i++) {
//         hash[arr[i]]++;
//     }

//     // Find the single element and return the answer:
//     for (let i = 0; i < n; i++) {
//         if (hash[arr[i]] === 1) {
//             return arr[i];
//         }
//     }

//     // This line will never execute
//     // if the array contains a single element.
//     return -1;
// }

// function main() {
//     let N = 5 
//     let arr = [4, 1, 2, 1, 2];
//     let ans = getSingleElement(arr,N);
//     console.log("The single element is:", ans);
// }

// main();

// Better Apparoh - 2 Using hashmap
// function getSingleElement(arr) {
//     const n = arr.length;
//     const hashmap = new Map();
//     for (let i = 0; i < n; i++) {
//         const num = arr[i];
//         hashmap.set(num, (hashmap.get(num) || 0) + 1);
//         // if we dont use || 0 then it will NAN , because hasmap will return undefined
//        // this will return the key =>  console.log(hashmap.get(num))
//        // keys are => 1,1,1,2,2    
//     }
//     for (const [num, count] of hashmap) {
//         if (count === 1) {
//             return num;
//         }
//     }
//     return -1;
// }

// function main() {
//     const arr = [4, 1, 2, 1, 2,5];
//     const ans = getSingleElement(arr);
//     console.log("The single element is:", ans);
// }

// main();

// if we have multiple single numbers
// function getSingleElements(arr) {
//     const n = arr.length;
//     const hashmap = new Map();
    
//     // Building the frequency count
//     for (let i = 0; i < n; i++) {
//         const num = arr[i];
//         hashmap.set(num, (hashmap.get(num) || 0) + 1);
//     }
    
//     const result = [];
    
//     // Finding all elements with a count of 1
//     for (const [num, count] of hashmap) {
//         if (count === 1) {
//             result.push(num);
//         }
//     }
    
//     return result;
// }

// function main() {
//     const arr = [4, 1, 2, 1, 2, 5];
//     const ans = getSingleElements(arr);
//     console.log("The single elements are:", ans); // Expected to return [4, 5]
// }

// main();

// Optimal Solution
function getSingleElement(arr) {
    // XOR all the elements:
    let xorr = 0;
    for (let i = 0; i < arr.length; i++) {
        xorr = xorr ^ arr[i];
    }
    return xorr;
}
function main() {
    let arr = [4, 1, 2, 1, 2];
    let ans = getSingleElement(arr);
    console.log("The single element is:", ans);
}

main();






