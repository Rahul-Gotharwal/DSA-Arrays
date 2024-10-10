// brute force solution
// var findKthLargest = function(nums, k) {
//   nums.sort((a,b)=>b-a)
//   return nums[k-1]
// };

// let nums  = [3,2,1,5,6,4]
// let k = 2
// console.log(findKthLargest(nums , k ))

// by using swap or sorting  code 

// var findKthLargest = function(nums, k) {
//     // Step 1: Sort the array in descending order using Selection Sort
//     for (let i = 0; i < nums.length; i++) {
//         // Find the index of the largest element in the unsorted part of the array
//         let maxIndex = i;
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[j] > nums[maxIndex]) {
//                 maxIndex = j;
//             }
//         }
//         // Swap the found largest element with the first element
//         [nums[i], nums[maxIndex] = nums[maxIndex], nums[i]];
//     }
    
//     // Step 2: Return the element at the k-1 index
//     return nums[k - 1];
// };

// // Example usage:
// let nums = [3, 2, 1, 5, 6, 4];
// let k = 2;
// console.log(findKthLargest(nums, k));  // Output: 5


// better solution 
// javascript dont have inbult min heap function so ...
// Min heap implementaion is
class MinHeap {
    constructor() {
        this.heap = [];
    }

    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    getLeftChildIndex(index) {
        return index * 2 + 1;
    }

    getRightChildIndex(index) {
        return index * 2 + 2;
    }

    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }

    insert(val) {
        this.heap.push(val);
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (this.getParentIndex(index) >= 0 && this.heap[this.getParentIndex(index)] > this.heap[index]) {
            this.swap(this.getParentIndex(index), index);
            index = this.getParentIndex(index);
        }
    }

    extractMin() {
        if (this.heap.length === 1) {
            return this.heap.pop();
        }
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return min;
    }

    heapifyDown(index) {
        let smallest = index;
        const left = this.getLeftChildIndex(index);
        const right = this.getRightChildIndex(index);

        if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
            smallest = left;
        }

        if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
            smallest = right;
        }

        if (smallest !== index) {
            this.swap(index, smallest);
            this.heapifyDown(smallest);
        }
    }

    size() {
        return this.heap.length;
    }

    getMin() {
        return this.heap[0];
    }
}


var findKthLargest = function(nums, k) {
    const minHeap = new MinHeap();
    
    for (let i = 0; i < nums.length; i++) {
        minHeap.insert(nums[i]);
        if (minHeap.size() > k) {
            minHeap.extractMin();
        }
    }
    
    return minHeap.getMin();
};

// Example usage:
let nums = [3, 2, 1, 5, 6, 4];
let k = 2;
console.log(findKthLargest(nums, k));  // Output: 5
