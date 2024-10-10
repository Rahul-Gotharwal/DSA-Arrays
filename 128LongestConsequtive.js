
//--------------Brute force apparoch with linear search-----------------//
// function linearSearch(arr,num){
//     let n =  arr.length
//     for(let i =0 ; i<n ; i++){
//         if(arr[i] === num){
//             return true
//         }else{
//             false
//         }
        
//     }
// }

// function longestSuccessiveElements(arr){
//     let n = arr.length;
//     let longest = 1 ;
//     for(let i =0 ; i<n;i++){
//         let x = arr[i];
//         let cnt = 1 
//         while(linearSearch(arr , x+1) === true){
//             x+=1;
//             cnt+=1;
//         } longest = Math.max(longest , cnt)
//     }
//     return longest
// }

// let arr = [100, 200, 1, 2, 3, 4];
// let ans = longestSuccessiveElements(arr);
// console.log("The longest consecutive sequence is", ans);

// ------------not Using for loop but also the brute appraoch
// function longestSuccessiveElements(arr) {
//     let n = arr.length;
//     let longest = 1;

//     for (let i = 0; i < n; i++) {
//         let x = arr[i];
//         let cnt = 1;

//         while (true) {
//             let found = false;
//             for (let j = 0; j < n; j++) {
//                 if (arr[j] === x + 1) {
//                     found = true;
//                     x += 1;
//                     cnt += 1;
//                     break;
//                 }
//             }
//             if (!found) {
//                 break;
//             }
//         }
//         longest = Math.max(longest, cnt);
//     }
//     return longest;
// }

// let arr = [100, 200, 1, 2, 3, 4];
// let ans = longestSuccessiveElements(arr);
// console.log("The longest consecutive sequence is", ans); // Output: "The longest consecutive sequence is 4"


// --------------------------BEtter Solution -------------------//
// function longestSuccessiveElements(arr){
//     let n = arr.length;
//     if(n===0) return 0;
//     // sort array 
//     arr.sort((a,b)=>a-b);
//     let lastSmaller = -Infinity;  
//     let count = 0 ;
//     let longset = 1  
//     for(let i = 0 ; i<n ; i++){
//         if(arr[i]-1 === lastSmaller){
//             count+=1;
//             lastSmaller =arr[i] // value update at every time
//         }else if( arr[i] !== lastSmaller) {
//          count = 1;
//          lastSmaller = arr[i]
//         }
//         longset = Math.max(longset , count)
//     }
//     return longset
// }

// let arr = [100, 200, 1, 2, 3, 4];
// let ans = longestSuccessiveElements(arr);
// console.log("The longest consecutive sequence is", ans);



// -----------------------Optimal Solution -------------------//



// function longestSuccessiveElements(a) {
//     let n = a.length;
//     if (n === 0)
//         return 0;

//     let longest = 1;
//     let st = new Set();
    
//     // put all the array elements into set
//     for (let i = 0; i < n; i++) {
//         st.add(a[i]);
//     }

//     // Find the longest sequence
//     for (let it of st) {
//         // if 'it' is a starting number
//         if (!st.has(it - 1)) {
//             // find consecutive numbers
//             let cnt = 1;
//             let x = it;
//             while (st.has(x + 1)) {
//                 x = x + 1;
//                 cnt = cnt + 1;
//             }
//             longest = Math.max(longest, cnt);
//         }
//     }
//     return longest;
// }

// let a = [100, 102,100,101,101,4,3,2,3,2,1,1,1,1,2];
// let ans = longestSuccessiveElements(a);
// console.log("The longest consecutive sequence is", ans);

/**
 Initialization
n is initialized to 6 (the length of the array a).
longest is initialized to 1.
A new set st is created.
Adding elements to the set
javascript
Copy code
for (let i = 0; i < n; i++) {
    st.add(a[i]);
}
The set st will contain: {100, 200, 1, 2, 3, 4}.

Finding the longest sequence
Now we iterate through each element in the set st:

First Iteration: it = 1
if (!st.has(it - 1)) checks if 0 is in the set. It's not, so we proceed.
Initialize cnt = 1 and x = 1.
Enter the while (st.has(x + 1)) loop:
x + 1 is 2, which is in the set, so increment x to 2 and cnt to 2.
x + 1 is 3, which is in the set, so increment x to 3 and cnt to 3.
x + 1 is 4, which is in the set, so increment x to 4 and cnt to 4.
x + 1 is 5, which is not in the set, so exit the loop.
Update longest to 4 (maximum of 1 and 4).
Second Iteration: it = 2
if (!st.has(it - 1)) checks if 1 is in the set. It is, so skip to the next iteration.
Third Iteration: it = 3
if (!st.has(it - 1)) checks if 2 is in the set. It is, so skip to the next iteration.
Fourth Iteration: it = 4
if (!st.has(it - 1)) checks if 3 is in the set. It is, so skip to the next iteration.
Fifth Iteration: it = 100
if (!st.has(it - 1)) checks if 99 is in the set. It's not, so we proceed.
Initialize cnt = 1 and x = 100.
Enter the while (st.has(x + 1)) loop:
x + 1 is 101, which is not in the set, so exit the loop.
longest remains 4 (maximum of 4 and 1).
Sixth Iteration: it = 200
if (!st.has(it - 1)) checks if 199 is in the set. It's not, so we proceed.
Initialize cnt = 1 and x = 200.
Enter the while (st.has(x + 1)) loop:
x + 1 is 201, which is not in the set, so exit the loop.
longest remains 4 (maximum of 4 and 1).
Conclusion
After iterating through all elements in the set, the longest consecutive sequence found is 4 (which corresponds to the sequence 1, 2, 3, 4).
 */

// ------------------return the array also---------------//
function longestSuccessiveElements(a) {
    let n = a.length;
    if (n === 0)
        return [0, []];

    let longest = 1;
    let longestSequence = [];
    let st = new Set();

    // put all the array elements into set
    for (let i = 0; i < n; i++) {
        st.add(a[i]);
    }

    // Find the longest sequence
    for (let it of st) {
        // if 'it' is a starting number
        if (!st.has(it - 1)) {
            // find consecutive numbers
            let cnt = 1;
            let x = it;
            let currentSequence = [x];

            while (st.has(x + 1)) {
                x = x + 1;
                currentSequence.push(x);
                cnt = cnt + 1;
            }

            if (cnt > longest) {
                longest = cnt;
                longestSequence = currentSequence;
            }
        }
    }

    return [longest, longestSequence];
}

let a = [100, 102, 100, 101, 101, 4, 3, 2, 3, 2, 1, 1, 1, 1, 2];
let [length, sequence] = longestSuccessiveElements(a);
console.log("The longest consecutive sequence length is", length);
console.log("The longest consecutive sequence is", sequence);
