// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.

function isPalindrome(s) {
    // Convert to lowercase and remove non-alphanumeric characters
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '')
    let left = 0
    let right = s.length - 1
    while (left < right) {
        if (s[left] !== s[right]) {
            return false
        }
        left++
        right--
    }
    return true
}

/* ----------------Solution without using Regex---------------------------*/


function isPalindrome(s) {
    s = s.toLowerCase()
    let left = 0
    let right = s.length - 1

    while (left < right) {
        // Skip non-alphanumeric from left
        while (left < right && !isAlphanumeric(s[left])) {
            left++
        }

        // Skip non-alphanumeric from right
        while (left < right && !isAlphanumeric(s[right])) {
            right--
        }

        // Compare characters
        if (s[left] !== s[right]) {
            return false
        }

        left++
        right--
    }

    return true
}

function isAlphanumeric(char) {
    return (char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')
}

// Example usage
let s = "A man, a plan, a canal: Panama"
console.log(isPalindrome(s))  // Output: true
s = "race a car"
console.log(isPalindrome(s))  // Output: false 

s = s.toLowerCase().replace(/[^a-z0-9]/g, '')