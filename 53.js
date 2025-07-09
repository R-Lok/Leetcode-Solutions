//53. Maximum Subarray

function maxSubArray(nums) {

    let max = -Infinity

    let dp = Array(nums.length + 1).fill(0)

    for (let i = nums.length - 1; i >= 0; i--) {

        dp[i] = Math.max(nums[i], nums[i] + dp[i + 1])
        max = Math.max(dp[i], max)
    }
    return max
}

