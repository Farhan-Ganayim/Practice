function rotateArray(nums, k) {   // wrong code
    let temp
    let j = nums.length
    for (let i = 0; i < nums.length - k ; i++) {
        temp = nums[i]
        nums[i] = nums[j - k]
        nums[j - k-1] = temp
        j--
    }
    return nums
}

let nums = [1, 2, 3, 4, 5, 6, 7]
let k = 3

console.log("🚀 ~ rotateArray ~ rotateArray:", rotateArray(nums, k))