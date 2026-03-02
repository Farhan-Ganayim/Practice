// Subarrays with Given Sum and Bounded Maximum
// Given an integer array nums and integers k and M, count the number of contiguous subarrays whose sum equals k and whose maximum element is at most M.

// Example

// Input

// nums = [2, -1, 2, 1, -2, 3]
// k = 3
// M = 2
// Output

// 2
// Explanation

// We need subarrays with sum = 3 and all elements ≤ 2. 
// Also, any subarray containing 3 is invalid because 3 > M. Check all starts:

// - From index 0: [2, -1, 2] → sum = 3, max = 2 → valid (count = 1).
// - From index 2: [2, 1] → sum = 3, max = 2 → valid (count = 2). No other subarray qualifies.
function countSubarrays(nums, k, M) {
    let count = 0
    const n = nums.length

    for (let start = 0; start < n; start++) {
        let sum = 0
        let max = -Infinity

        for (let end = start; end < n; end++) {
            sum += nums[end]
            max = Math.max(max, nums[end])

            if (sum === k && max <= M) {
                count++
            }
        }
    }

    return count
}   

// Example usage:
const nums = [2, -1, 2, 1, -2, 3]
const k = 3
const M = 2
const result = countSubarrays(nums, k, M)
console.log(result) // Output: 2 

// ------------improved version with early termination------------

// function countSubarrays(nums, k, M) {
//     let count = 0
//     const n = nums.length

//     for (let start = 0; start < n; start++) {
//         let sum = 0

//         for (let end = start; end < n; end++) {
//             if (nums[end] > M) break

//             sum += nums[end]

//             if (sum === k) count++
//         }
//     }

//     return count
// }
