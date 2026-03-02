function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
}

// Example usage:
const nums = [2, 7, 11, 15]
const target = 9
const result = twoSum(nums, target)
console.log(result) // Output: [0, 1]

//Given an array of positive integers, return the number of elements that are strictly greater than the average of all previous elements. Skip the first element.
function countGreaterThanAverage(arr) {
    let count = 0
    let sum = arr[0]
    let previousCount = 1

    for (let i = 1; i < arr.length; i++) {
        const average = sum / previousCount
        if (arr[i] > average) {
            count++
        }
        sum += arr[i]
        previousCount++
    }

    return count
}

// Example usage:
const arr = [1, 2, 3, 4, 5]
const res = countGreaterThanAverage(arr)
console.log(res) // Output: 4