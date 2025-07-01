//198. House robber

/*
For dynamic programming problems - think small first. What's the smallest step you can do?

*/

function rob(nums) {

    let p1 = 0
    let p2 = 0

    for (let i = 0; i < nums.length; i++) {
        let curr = Math.max(nums[i] + p2, p1)
        p2 = p1
        p1 = curr
    }
    return p1
}

