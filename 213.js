//213. House Robber II

function rob(nums) {

    if (nums.length === 1) {
        return nums[0]
    }

    const includeFirst = nums.slice(0, nums.length - 1)
    const includeLast = nums.slice(1)

    return Math.max(getValue(includeFirst), getValue(includeLast))


}

function getValue(nums) {

    let p1 = 0
    let p2 = 0

    for (let i = 0; i < nums.length; i++) {
        let curr = Math.max(nums[i] + p2, p1)
        p2 = p1
        p1 = curr
    }

    return p1
}

