// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21

function reverseInteger(x) {
    const sign = x < 0 ? -1 : 1
    let num = Math.abs(x)
    let reversed = 0
    while (num !== 0) {
        const digit = num % 10
        num = Math.floor(num / 10)
        reversed = reversed * 10 + digit
    }
    reversed *= sign
    if (reversed < Math.pow(-2, 31) || reversed > Math.pow(2, 31) - 1) {
        return 0
    }
    return reversed
}


// Example usage:
const x1 = 123
const x2 = -123
const x3 = 120
console.log(reverseInteger(x1))  // Output: 321
console.log(reverseInteger(x2))  // Output: -321
console.log(reverseInteger(x3))  // Output: 21

