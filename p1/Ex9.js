function longestSubarray(nums, k) {

    let left = 0
    let sum = 0
    let maxLength = 0

    for (let right = 0; right < nums.length; right++) {
        sum += nums[right]

        while (sum > k && left <= right) {
            sum -= nums[left]
            left++
        }
        maxLength = Math.max(maxLength, right - left + 1)
    }
    return maxLength
}

// Example usage:
const nums = [1, 2, 3, 4, 5]
const k = 11
const result = longestSubarray(nums, k)
console.log(result) // Output: 4 (subarray [2, 3, 4, 5] has sum = 14 > 11, so we take [1, 2, 3, 4] with sum = 10 <= 11)
