//Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

function rotate(nums, k) {
    const n = nums.length
    k = k % n

    let rotated = nums.slice(n - k).concat(nums.slice(0, n - k))

    // for (let i = 0; i < n; i++) {
    //     nums[i] = rotated[i]
    // }
    return rotated
}

// Example usage:
let arr1 = [1, 2, 3, 4, 5, 6, 7]
let k = 3
// rotate(arr1, 3)
console.log(rotate(arr1,k)) // [5, 6, 7, 1, 2, 3, 4]

let arr2 = [-1, -100, 3, 99]
// rotate(arr2, 2)
console.log(rotate(arr2,2))  // [3, 99, -1, -100]