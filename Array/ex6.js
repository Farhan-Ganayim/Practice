//Given two integer arrays nums1 and nums2, return an array of their intersection. 
//Each element in the result must appear as many times as it shows in both arrays 
//and you may return the result in any order.


function arrayIntersection(nums1, nums2) {
    let count = {}
    let intersection = []

    // Count occurrences in nums1
    for (let i = 0; i < nums1.length; i++) {
        count[nums1[i]] = (count[nums1[i]] || 0) + 1
    }

    // Check nums2 against the count
    for (let i = 0; i < nums2.length; i++) {
        if (count[nums2[i]] > 0) {
            intersection.push(nums2[i])
            count[nums2[i]]--
        }
    }

    return intersection
}



// function arrayIntersection(nums1, nums2) {   
//     let intersection = []
//     for (let i = 0; i < nums1.length; i++) {
//         for (let j = 0; j < nums2.length; j++){
//             if (nums1[i]===nums2[j]){
//                 intersection.push(nums1[i])
//                 nums2.splice(j, 1)
//                 break
//             }
//         }
//     }
//     return intersection 
// }

// Example usage:
const nums1 = [1, 2, 2, 1]
const nums2 = [2, 2]
const result = arrayIntersection(nums1, nums2)
console.log(result) // Output: [2, 2]