//152. Maximum Product Subarray

/*
Plan:
- Draw out tree - see that starting from the last element, the only valid subarray would be itself (since it has to be at the start)
- See repeated problems as you travel to left side of tree e.g. -3 can decide to multiply by 4 or not
- From there, can see the bottom-up approach - work from last element towards the front of the array
    and memoize results as they are calculated. 
- base case is just one element so the default return value would just be nums[nums.length - 1]


Reflection:
- Initially did not consider having to store both local max AND min per index. -> needs min to deal with potential new max due
    to negative numbers multiplying

 */

function maxProduct(nums) {

    if (nums.length === 0) {
        return 0
    }

    if (nums.length === 1) {
        return nums[0]
    }

    const memo = Array(nums.length).fill([Infinity, -Infinity]) //min on left, max on right
    memo[nums.length - 1] = [nums[nums.length - 1], nums[nums.length - 1]]
    let res = nums[nums.length - 1]

    for (let i = nums.length - 2; i >= 0; i--) {
        const num = nums[i]
        const min = Math.min(num, num * memo[i + 1][0], num * memo[i + 1][1])
        const max = Math.max(num, num * memo[i + 1][0], num * memo[i + 1][1])

        memo[i][0] = min
        memo[i][1] = max

        res = Math.max(res, max)
    }
    return res
}

