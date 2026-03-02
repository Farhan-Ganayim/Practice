function hasDuplicates(nums) {

    const cleaned = new Set(nums)
    if (cleaned.size === nums.length) return false
    return true

}


// Example usage:
console.log(hasDuplicates([1, 2, 3, 4])) // false
console.log(hasDuplicates([1, 2, 3, 1])) // true
console.log(hasDuplicates([])) // false

