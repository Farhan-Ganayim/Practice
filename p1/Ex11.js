function countSubarraysWithProductLessThanK(nums, k) {
    let count = 0

    for (let start = 0; start < nums.length; start++) {
        let product = 1

        for (let end = start; end < nums.length; end++) {
            product *= nums[end]

            if (product < k) {
                count++
            } else {
                break  // No point continuing, product will only grow
            }
        }
    }

    return count
}

// Example usage:
console.log(countSubarraysWithProductLessThanK([10, 5, 2, 6], 100))  // 8
console.log(countSubarraysWithProductLessThanK([1, 2, 3], 0))        // 0
console.log(countSubarraysWithProductLessThanK([1, 1, 1], 2))        // 6