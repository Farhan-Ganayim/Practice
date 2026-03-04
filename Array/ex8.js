// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

function moveZeroes(nums) {
    let lastNonZeroFoundAt = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[lastNonZeroFoundAt] = nums[i]
            lastNonZeroFoundAt++
        }
    }

    // Fill remaining elements with 0's
    for (let i = lastNonZeroFoundAt; i < nums.length; i++) {
        nums[i] = 0
    }

    return nums
}

// Example usage:
let nums1 = [0, 1, 0, 3, 12]
moveZeroes(nums1)
console.log(nums1)  // [1, 3, 12, 0, 0]

let nums2 = [0, 0, 1]
moveZeroes(nums2)
console.log(nums2)  // [1, 0, 0]
