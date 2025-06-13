function combinationSum(nums, target) {

    let res = []
    let curr = []

    backtrack(nums, target, res, curr, 0)
    return res
}

function backtrack(nums, target, res, curr, idx) {

    if (target === 0) {
        res.push([...curr])
        return
    }

    if (target < 0 || idx === nums.length) {
        return
    }

    curr.push(nums[idx])

    backtrack(nums, target - nums[idx], res, curr, idx)

    curr.pop()

    backtrack(nums, target, res, curr, idx + 1)
}