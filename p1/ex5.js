function isAlphabeticPalindrome(code) {
    const cleaned = code.replace(/[^a-zA-Z]/g, '').toLowerCase()
    const reversed = cleaned.split('').reverse().join('')
    return cleaned === reversed

}


function isAlphabeticPalindrome(code) {
    let left = 0
    let right = code.length - 1

    while (left < right) {
        while (left < right && !isLetter(code[left])) {
            left++
        }

        while (left < right && !isLetter(code[right])) {
            right--
        }

        if (code[left].toLowerCase() !== code[right].toLowerCase()) {
            return false
        }

        left++
        right--
    }

    return true
}

function isLetter(char) {
    return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')
}

// Example usage:
console.log(isAlphabeticPalindrome("A man, a plan, a canal: Panama")) // true
console.log(isAlphabeticPalindrome("race a car")) // false
console.log(isAlphabeticPalindrome("No 'x' in Nixon")) // true