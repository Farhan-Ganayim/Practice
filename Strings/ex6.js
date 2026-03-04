function myAtoi(s) {
    s = s.trim()
    let sign = 1
    let result = 0

    // Check for optional sign
    if (s[0] === '-') {
        sign = -1
    }
    if (s[0] === '-' || s[0] === '+') {
        s = s.slice(1)
    }

    // Convert characters to integer
    for (let i = 0; i < s.length; i++) {
        const char = s[i]
        if (char < '0' || char > '9') {
            break
        }
        result = result * 10 + (char.charCodeAt(0) - '0'.charCodeAt(0))
    }

    return result * sign
}

/*----------------------- GPT SUGGESTION -----------------------*/

function myAtoi(s) {

    let i = 0
    let sign = 1
    let result = 0

    const INT_MAX = 2**31 - 1
    const INT_MIN = -(2**31)

    // 1. Skip leading spaces
    while (i < s.length && s[i] === ' ') {
        i++
    }

    // 2. Check sign
    if (s[i] === '+' || s[i] === '-') {
        if (s[i] === '-') sign = -1
        i++
    }

    // 3. Read digits
    while (i < s.length && s[i] >= '0' && s[i] <= '9') {

        let digit = s[i] - '0'

        // 4. Check overflow
        if (result > Math.floor(INT_MAX / 10) || 
           (result === Math.floor(INT_MAX / 10) && digit > 7)) {

            return sign === 1 ? INT_MAX : INT_MIN
        }

        result = result * 10 + digit
        i++
    }

    return result * sign
}

// Example usage

let s = "   -42"
console.log(myAtoi(s)) // Output: -42