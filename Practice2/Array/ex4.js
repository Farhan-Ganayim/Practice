function containsDuplicate(nums) {
    const seen = new Set()
    for (let i = 0; i < nums.length; i++) {
        if (!seen[nums[i]]) seen[nums[i]] = 1
        else seen[nums[i]]++
    }
    for (let key in seen) {
        if (seen[key] > 1) return true
    }
    return false


}


// Example usage:
console.log(containsDuplicate([1, 2, 3, 4])) // false
console.log(containsDuplicate([1, 2, 3, 1])) // true
console.log(containsDuplicate([])) // false 
