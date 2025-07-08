//62. Unique paths
/*
Thinking:
Each index you can pick to go down or right: binary decision tree (barring you are at the bottom/rightmost)

Naive approach:
for each square, recurse into square below and the square to the right
- if leads out of bounds, return
- if not out of bounds, continue
- if index is m-1, n-1, increment output by 1 (reached the end)

Better approach?
- make a 2d array of same size as input
- mark top row and leftmost column with 1's
- for each element not the topmost nor leftmost: add the number from top, and left (to get number of possible paths to this cell)
- return the number at m-1, n-1
 */

function uniquePaths(m, n) {

    const dp = Array(m).fill(null).map(element => Array(n).fill(1))

    for (let r = 1; r < m; r++) {
        for (let c = 1; c < n; c++) {
            dp[r][c] = dp[r - 1][c] + dp[r][c - 1]
        }
    }
    return dp[m - 1][n - 1]
}

