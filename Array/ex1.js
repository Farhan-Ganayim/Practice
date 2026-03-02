function removeDuplicates(nums) {
    if (nums.length === 0) return 0

    let k = 1  // Position for next unique element

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[k] = nums[i]
            k++
        }
    }

    return k
}

function removeDuplicates(nums) {
    if (nums.length === 0) return 0

    // Mark duplicates from the end
    for (let i = nums.length - 1; i > 0; i--) {
        if (nums[i] === nums[i - 1]) {
            nums[i] = null  // Use null instead of 0
        }
    }

    // Move non-null values to front
    let k = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== null) {
            nums[k] = nums[i]
            k++
        }
    }

    return k
}



// Example usage:
let nums1 = [1, 1, 2]
console.log(removeDuplicates(nums1))  // 2
console.log(nums1)  // [1, 2, 2] (first 2 elements are unique)

let nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
console.log(removeDuplicates(nums2))  // 5
console.log(nums2)  // [0, 1, 2, 3, 4, ...] (first 5 elements are unique)