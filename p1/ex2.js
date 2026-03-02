//Given an array of intervals [startTime, endTime], merge all overlapping intervals and return a sorted array of non-overlapping intervals.

//Example

//Input

//intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]
//Output

//  [[1, 6], [8, 10], [15, 18]]
function mergeIntervals(intervals) {
    if (intervals.length === 0) return []
    // Sort intervals by start time
    intervals.sort((a, b) => a[0] - b[0])
    const merged = [intervals[0]]
    for (let i = 1; i < intervals.length; i++) {
        const current = intervals[i]
        const lastMerged = merged[merged.length - 1]
        // If there is an overlap, merge the intervals
        if (current[0] <= lastMerged[1]) {
            lastMerged[1] = Math.max(lastMerged[1], current[1])
        } else {
            merged.push(current)
        }
    }
    return merged
}   

// Example usage:
const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]
const result = mergeIntervals(intervals)
console.log(result) // Output: [[1, 6], [8, 10], [15, 18]]  
