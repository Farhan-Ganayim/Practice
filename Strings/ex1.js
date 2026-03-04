function reverseString(s) {
    let temp
    for (let i = 0; i < Math.floor(s.length / 2); i++) {
        temp = s[s.length - 1 - i]
        s[s.length - i - 1] = s[i]
        s[i] = temp
    }
    return s
}

//Example usage

let s = ["h","e","l","l","o"]
console.log(reverseString(s))
