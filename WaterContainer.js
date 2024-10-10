// leetcode big O of n complexity

// var maxArea = function(hieght){
// var maxwaterarea = 0
// let left = 0 ;
// let right = hieght.length-1
// when the left is less than right then only we can traverse the loop
// while(left<right){
//     const h = Math.min(hieght[left] , hieght[right] // value at indexes
//     const w = right-left // indexes
//     const area = h*w;
//     maxwaterarea = Math.max(maxwaterarea , area)
//     if(hieght[left]< hieght[right]){
//         left++
//     }else{
//         right--
//     }
// }
//   return maxwaterarea
// }
// const hieght = [1,8,6,2,5,4,8,3,7];
// const result = maxArea(hieght)
// console.log(result)
/*
For i = 0, we compare with:

j = 1: height = min(1, 8) = 1, width = 1 - 0 = 1, area = 1 * 1 = 1
j = 2: height = min(1, 6) = 1, width = 2 - 0 = 2, area = 1 * 2 = 2
j = 3: height = min(1, 2) = 1, width = 3 - 0 = 3, area = 1 * 3 = 3
j = 4: height = min(1, 5) = 1, width = 4 - 0 = 4, area = 1 * 4 = 4
j = 5: height = min(1, 4) = 1, width = 5 - 0 = 5, area = 1 * 5 = 5
j = 6: height = min(1, 8) = 1, width = 6 - 0 = 6, area = 1 * 6 = 6
j = 7: height = min(1, 3) = 1, width = 7 - 0 = 7, area = 1 * 7 = 7
j = 8: height = min(1, 7) = 1, width = 8 - 0 = 8, area = 1 * 8 = 8
*/
// big O of n^2 complexity
var maxArea = function (hieght) {
  let maxwaterarea = 0;
  let left = 0;
  let right = hieght.length - 1;
  for (let i  = 0; i < hieght.length - 1; i++) {
  for(let j = i+1 ; j<hieght.length ; j++){
    const h = Math.min(hieght[i], hieght[j]);
    const w = j-i;
    const area  = h* w ;
    maxwaterarea = Math.max(maxwaterarea, area)
  }
  }
  return maxwaterarea;
}; 
const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const result = maxArea(height);
console.log(result);