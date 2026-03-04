function isAnagram(s, t) {

    let sArray = s.split('')
    let tArray = t.split('')
    let n = sArray.length
    for (let i = 0; i < n; i++) {

        let index = tArray.indexOf(sArray[i])
        if (index !== -1) {
            tArray.splice(index, 1)
        } else {
            return false
        }
    }
    return tArray.length === 0
}

//Example usage 

let s = "anagram"
let t = "nagaram"
console.log(isAnagram(s, t))
