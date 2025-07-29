//238. Product of Array Except Self
/*
- Had to think carefully about array indexing in the first two loops
- Drawing out the process made it easier to envision
*/

function productExceptSelf(nums) {

    const fromLeft = []
    const fromRight = []
    const res = []

    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            fromLeft[i] = 1
        } else {
            fromLeft[i] = fromLeft[i - 1] * nums[i - 1]
        }
    }

    for (let i = nums.length - 1; i >= 0; i--) {
        if (i === nums.length - 1) {
            fromRight[i] = 1
        } else {
            fromRight[i] = nums[i + 1] * fromRight[i + 1]
        }
    }

    for (let i = 0; i < nums.length; i++) {
        res[i] = fromLeft[i] * fromRight[i]
    }

    return res
}

