function isLetter(char) {
    return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')
}

function isPalindrome(s) {
    let left = 0
    let right = s.length - 1

    while (left < right) {
        if (s[left] !== s[right]) {
            return false
        }
        left++
        right--
    }
    return true
}

// convert to lowercase and remove chars not letter or number
let s = ""
s = s.toLowerCase().replace(/[^a-z0-9]/g, '')

export function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

export function debounce(func, timeout = 300) {
    let timer
    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            func.apply(this, args)
        }, timeout)
    }
}

export function makeId(length = 5) {
    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (let i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
}

module.exports = {
    isLetter,
    isPalindrome,
    getRandomInt,
    debounce,
    makeId,
    getRandomIntInclusive
}


