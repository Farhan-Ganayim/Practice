// Given a string s, find the first non-repeating character in it and return its index. 
// If it does not exist, return -1.


function firstUniqChar(s) {
    const charCount = {}
    for (let i = 0; i < s.length; i++) {
        charCount[s[i]] = (charCount[s[i]] || 0) + 1
    }
    for (let i = 0; i < s.length; i++) {
        if (charCount[s[i]] === 1) {
            return i
        }
    }
    return -1
}

// Example usage:
console.log(firstUniqChar("leetcode")) // Output: 0
console.log(firstUniqChar("loveleetcode")) // Output: 2
console.log(firstUniqChar("aabb")) // Output: -1

