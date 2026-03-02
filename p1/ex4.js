function findSmallestMissingPositive(orderNumbers) {
    const numSet = new Set(orderNumbers)

    let minPositive = 1
    while (numSet.has(minPositive)) {
        minPositive++
    }
    return minPositive

}

// Example usage:
const orderNumbers = [2, 1]
const result = findSmallestMissingPositive(orderNumbers)
console.log(result) // Output: 4