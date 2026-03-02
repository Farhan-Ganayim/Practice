function longestOnesWithFlip(s) {
    let left = 0
    let zeroCount = 0
    let maxLength = 0

    for (let right = 0; right < s.length; right++) {
        if (s[right] === '0') {
            zeroCount++
        }
        while (zeroCount > 1) {
            if (s[left] === '0') {
                zeroCount--
            }
            left++
        }
        maxLength = Math.max(maxLength, right - left + 1)
    }
    return maxLength
}