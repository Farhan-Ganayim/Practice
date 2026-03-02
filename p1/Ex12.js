function maxSumSubarrayOfSizeK(nums, k) {
    if (nums.length < k) return 0

    // Calculate sum of first window
    let windowSum = 0
    for (let i = 0; i < k; i++) {
        windowSum += nums[i]
    }

    let maxSum = windowSum

    // Slide the window
    for (let i = k; i < nums.length; i++) {
        windowSum += nums[i] - nums[i - k]  // Add new element, remove old
        maxSum = Math.max(maxSum, windowSum)
    }

    return maxSum
}

function maxSumSubarrayOfSizeK(nums, k) {
    if (nums.length < k) return 0

    // Calculate sum of first window
    let windowSum = 0
    for (let i = 0; i < k; i++) {
        windowSum += nums[i]
    }

    let maxSum = windowSum

    // Slide the window
    for (let i = k; i < nums.length; i++) {
        windowSum += nums[i] - nums[i - k]  // Add new element, remove old
        maxSum = Math.max(maxSum, windowSum)
    }

    return maxSum
}


// Example usage:
console.log(maxSumSubarrayOfSizeK([2, 1, 5, 1, 3, 2], 3))  // 9 ([5,1,3])
console.log(maxSumSubarrayOfSizeK([2, 3, 4, 1, 5], 2))     // 7 ([3,4])
console.log(maxSumSubarrayOfSizeK([1, 2, 3, 4, 5], 4))     // 14 ([2,3,4,5])

