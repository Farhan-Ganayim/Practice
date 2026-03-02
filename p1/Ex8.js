function isSubsequence(s1, s2) {

    let i = 0
    let j = 0

    while (i < s1.length && j < s2.length) {

        if (s1.charAt(i) === s2.charAt(j)) {
            i++
        }
        j++

    }
    return i === s1.length

}

// Example usage:
console.log(isSubsequence("abc", "ahbgdc")) // true
console.log(isSubsequence("axc", "ahbgdc")) // false