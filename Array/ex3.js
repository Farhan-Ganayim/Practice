//Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

function rotate(nums, k) {
    const n = nums.length
    k = k % n

    let rotated = nums.slice(n - k).concat(nums.slice(0, n - k))

    for (let i = 0; i < n; i++) {
        nums[i] = rotated[i]
    }
}

// Example usage:
let arr1 = [1, 2, 3, 4, 5, 6, 7]
rotate(arr1, 3)
console.log(arr1)  // [5, 6, 7, 1, 2, 3, 4]

let arr2 = [-1, -100, 3, 99]
rotate(arr2, 2)
console.log(arr2)  // [3, 99, -1, -100]