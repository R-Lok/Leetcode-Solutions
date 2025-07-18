//338. Counting Bits
/**
 * 
 * Similar to problem 191, but instead is a series of numbers
 * 
 * - Revisit this problem
 * - Note the pattern - x/2 + (x is odd? 1:0)
 * 
 */


function countBits(n) {

    let dp = Array(n + 1).fill(0)

    let jump = 1

    for (let i = 1; i < dp.length; i++) {
        dp[i] = dp[i >> 1] + (i & 1)
    }

    return dp
}

