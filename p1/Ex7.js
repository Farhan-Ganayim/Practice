
function mergeSortedArrays(arr1, arr2) {
    // ans is the answer
        let ans = []
    let i = 0, j = 0
    
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            ans.push(arr1[i])
            i++
        } else {
            ans.push(arr2[j])
            j++
        }
    }
    
    while (i < arr1.length) {
        ans.push(arr1[i])
        i++
    }
    
    while (j < arr2.length) {
        ans.push(arr2[j])
        j++
    }
    
    return ans
}

// Example usage:
const arr1 = [1, 3, 5]
const arr2 = [2, 4, 6]
const result = mergeSortedArrays(arr1, arr2)
console.log(result) // Output: [1, 2, 3, 4, 5, 6]