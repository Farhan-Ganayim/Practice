// function twoSum(nums, target) {

//     let sorted = nums.toSorted((a, b) => a - b)
//     let left = 0
//     let right = sorted.length - 1
//     for (let i = 0; i <= sorted.length; i++) {
//         if (sorted[left] + sorted[right] === target) {

//             break
//         }
//         else if (sorted[left] + sorted[right] < target) left++
//         else right--
//     }
//     if (sorted[left]===sorted[right]){

//         return [nums.indexOf(sorted[left]), nums.indexOf(sorted[right],left+1)]

//     }
//     return [nums.indexOf(sorted[left]), nums.indexOf(sorted[right])]

// }

function twoSum(nums, target) {
    let map = {}

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i]

        if (map[complement] !== undefined) {
            return [map[complement], i]
        }

        map[nums[i]] = i
    }

    return []
}

// Solution using map on arrays

// function twoSum(nums, target) {

//     const arr = nums.map((value, index) => ({
//         value,
//         index
//     }))

//     arr.sort((a, b) => a.value - b.value)

//     let left = 0
//     let right = arr.length - 1

//     while (left < right) {
//         const sum = arr[left].value + arr[right].value

//         if (sum === target) {
//             return [arr[left].index, arr[right].index]
//         }

//         if (sum < target) left++
//         else right--
//     }
// }


//Example usage

// let nums = [2, 7, 11, 15]
let nums = [2, 2, 1]
console.log(twoSum(nums, 4))