/*
The issue with your code lies in the fact that you are treating arrays as linked lists. In JavaScript, an array is not the same as a linked list. You need to convert the input arrays into linked lists first, and then pass these linked lists to the addTwoNumbers function.
*/

// function ListNode(val, next = null) {
//     this.val = val;
//     this.next = next;
// }

// var addTwoNumbers = function (head1, head2) {
//     let t1 = head1;
//     let t2 = head2;
//     let dummyNode = new ListNode(-1);
//     let current = dummyNode;
//     let carry = 0;

//     while (t1 !== null || t2 !== null || carry !== 0) {
//         let sum = carry;
//         if (t1) {
//             sum += t1.val;
//             t1 = t1.next;
//         }
//         if (t2) {
//             sum += t2.val;
//             t2 = t2.next;
//         }

//         carry = Math.floor(sum / 10);
//         let newNode = new ListNode(sum % 10);
//         current.next = newNode;
//         current = current.next;
//     }

//     return dummyNode.next;
// };

// head1 = [2,4,3] 
// head2 = [5,6,4]
// const result = addTwoNumbers(head1 , head2);


// this is the code with class and return the result
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

var addTwoNumbers = function(head1, head2) {
    let t1 = head1;
    let t2 = head2;
    let dummyNode = new ListNode(-1);
    let current = dummyNode;
    let carry = 0;

    while (t1 !== null || t2 !== null || carry !== 0) {
        let sum = carry;
        if (t1) {
            sum += t1.val;
            t1 = t1.next;
        }
        if (t2) {
            sum += t2.val;
            t2 = t2.next;
        }

        carry = Math.floor(sum / 10);
        let newNode = new ListNode(sum % 10);
        current.next = newNode;
        current = current.next;
    }

    return dummyNode.next;
};

// Helper function to convert an array to a linked list
function arrayToList(arr) {
    let dummyNode = new ListNode();
    let current = dummyNode;
    for (let num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }
    return dummyNode.next;
}

// Helper function to print the linked list
function printList(head) {
    let current = head;
    let result = [];
    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }
    console.log(result);
}

// Test case
let head1 = arrayToList([2, 4, 3]);
let head2 = arrayToList([5, 6, 4]);
const result = addTwoNumbers(head1, head2);
printList(result);
