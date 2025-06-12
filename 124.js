function maxPathSum(root) {

    let maxSum = root.val

    function dfs(root) {

        if (!root) return 0

        const val = root.val

        const leftMax = dfs(root.left)
        const rightMax = dfs(root.right)

        const localMax = Math.max(val, val + leftMax + rightMax, val + leftMax, val + rightMax)
        maxSum = Math.max(localMax, maxSum)

        return Math.max(val, val + leftMax, val + rightMax)
    }
    dfs(root)
    return maxSum
}

