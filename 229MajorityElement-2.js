function majorityElement(arr) {
    let n = arr.length;
    if (n === 0) return [];
  
    // There can be at most two elements that appear more than n/3 times
    let candidate1 = null, candidate2 = null;
    let count1 = 0, count2 = 0;
  
    for (let num of arr) {
      if (candidate1 !== null && num === candidate1) {
        count1++;
      } else if (candidate2 !== null && num === candidate2) {
        count2++;
      } else if (count1 === 0) {
        candidate1 = num;
        count1 = 1;
      } else if (count2 === 0) {
        candidate2 = num;
        count2 = 1;
      } else {
        count1--;  
        count2--;
      }
    }
  
    // Verify the candidates
    count1 = 0;
    count2 = 0;
    for (let num of arr) {
      if (num === candidate1) count1++;
      else if (num === candidate2) count2++;
    }
  
    let result = [];
    if (count1 > Math.floor(n / 3)) result.push(candidate1);
    if (count2 > Math.floor(n / 3)) result.push(candidate2);
  
    return result;
  }
  
  let arr = [3,2,3];
  let ans = majorityElement(arr);
  console.log("The majority elements are:", ans);
  