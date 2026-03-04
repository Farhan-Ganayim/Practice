// Given a non-empty array of integers nums, every element 
// appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity 
// and use only constant extra space.

function findSingle(nums) {

        let single = 0
    for (let i = 0; i < nums.length; i++) {
        single ^= nums[i]
    }
    return single
}

// Example usage:
const nums1 = [2, 2, 1]
console.log(findSingle(nums1))  // Output: 1    
