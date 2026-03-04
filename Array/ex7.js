function increaseByOne(digits) {
        let carry = 1

    for (let i = digits.length - 1; i >= 0; i--) {
        let sum = digits[i] + carry

        if (sum === 10) {
            digits[i] = 0
            carry = 1
        } else {
            digits[i] = sum
            carry = 0
            break
        }
    }

    // If still have carry, need to add 1 at the beginning
    if (carry === 1) {
        digits.unshift(1)
    }

    return digits
}

//Example usage

let number = [1,2,3]
increaseByOne(number)
console.log(number)  // Output: [1, 2, 4]