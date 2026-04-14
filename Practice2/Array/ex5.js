function singleNumber(nums) {

    const map = {}
    for (let i = 0; i < nums.length; i++) {
        if (!map[nums[i]]) map[nums[i]] = 1
        else map[nums[i]]++
    }

    for (let key in map) {
        if (map[key] === 1) {
            // console.log(map)
            return key
        }
    }
}

//Example Usage 

let nums = [4, 1, 2, 1, 2]
console.log(singleNumber(nums))

