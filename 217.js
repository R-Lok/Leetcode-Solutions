//217. Contains Duplicate

function containsDuplicate(nums) {

    const map = new Map()

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) return true
        else map.set(nums[i])
    }
    return false
}

