var lengthOfLongestSubstring = function (s) {
    let array = new Array(256).fill(-1); // array of 256 elements initialized with -1
    const n = s.length;
    let left = 0, right = 0; // pointers
    let maxlen = 0;
  
    while (right < n) {
      if (array[s.charCodeAt(right)] !== -1) { // array[s.charCodeAt(right)] is used to map the character to its ASCII value index.
        if (array[s.charCodeAt(right)] >= left) {
          left = array[s.charCodeAt(right)] + 1;
        }
      }
  
      let len = right - left + 1;
      maxlen = Math.max(len, maxlen);
      array[s.charCodeAt(right)] = right; // 
      right++;
    }
    
    return maxlen;
  };
  
  // Example usage:
  const s = "abcdefabcbb";
  console.log(lengthOfLongestSubstring(s)); // Output: 6
/*

array = new Array(256).fill(-1): An array to store the last index of each character, initialized to -1.
s = "abcabcbb"
n = s.length = 8
left = 0
right = 0
maxlen = 0
Iteration Details
First iteration (right = 0):

s[right] = 'a'
array[s.charCodeAt(right)] = array[97] = -1 (since 'a' has ASCII code 97)
array[97] !== -1 is false, so skip the inner if
Update len = right - left + 1 = 0 - 0 + 1 = 1
maxlen = Math.max(len, maxlen) = Math.max(1, 0) = 1
Update array[97] = 0
Increment right to 1
Second iteration (right = 1):

s[right] = 'b'
array[s.charCodeAt(right)] = array[98] = -1 (since 'b' has ASCII code 98)
array[98] !== -1 is false, so skip the inner if
Update len = right - left + 1 = 1 - 0 + 1 = 2
maxlen = Math.max(len, maxlen) = Math.max(2, 1) = 2
Update array[98] = 1
Increment right to 2
Third iteration (right = 2):

s[right] = 'c'
array[s.charCodeAt(right)] = array[99] = -1 (since 'c' has ASCII code 99)
array[99] !== -1 is false, so skip the inner if
Update len = right - left + 1 = 2 - 0 + 1 = 3
maxlen = Math.max(len, maxlen) = Math.max(3, 2) = 3
Update array[99] = 2
Increment right to 3
Fourth iteration (right = 3):

s[right] = 'a'
array[s.charCodeAt(right)] = array[97] = 0 (since 'a' was last seen at index 0)
array[97] !== -1 is true
array[97] >= left is true (0 >= 0), so update left = array[97] + 1 = 0 + 1 = 1
Update len = right - left + 1 = 3 - 1 + 1 = 3
maxlen = Math.max(len, maxlen) = Math.max(3, 3) = 3
Update array[97] = 3
Increment right to 4
Fifth iteration (right = 4):

s[right] = 'b'
array[s.charCodeAt(right)] = array[98] = 1 (since 'b' was last seen at index 1)
array[98] !== -1 is true
array[98] >= left is true (1 >= 1), so update left = array[98] + 1 = 1 + 1 = 2
Update len = right - left + 1 = 4 - 2 + 1 = 3
maxlen = Math.max(len, maxlen) = Math.max(3, 3) = 3
Update array[98] = 4


*/ 