function Example(s1,s2) {

let first=s1.charAt(0)
let firstInS2Idx=s2.indexOf(first)
if (firstInS2Idx!== -1){
    if ((s2.slice(firstInS2Idx)===s1.slice(0,s2.length-firstInS2Idx-1))&&(s2.slice(0,firstInS2Idx)===s1.slice(0,2))){

    }
}

}

function isRotation(s1, s2) {
    // Edge cases
    if (s1.length !== s2.length) return 0
    if (s1 === s2) return 0

    let first = s1.charAt(0)
    let firstInS2Idx = s2.indexOf(first)

    while (firstInS2Idx !== -1) {

        let s2Left = s2.slice(0, firstInS2Idx)      
        let s2Right = s2.slice(firstInS2Idx)         

        if (s2Right + s2Left === s1) {
            return 1
        }

        firstInS2Idx = s2.indexOf(first, firstInS2Idx + 1)
    }

    return 0
}


console.log(isRotation("abcde", "cdeab")) // 1 (rotation)
console.log(isRotation("abcde", "abcde")) // 0 (identical)
console.log(isRotation("abcde", "abced")) // 0 (not a rotation)

cdeabcdeab