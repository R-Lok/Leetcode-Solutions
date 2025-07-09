//1143. Longest Common Subsequence
/*
notes:
Needed help to figure out the memoization
 */

class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {

        const dp = Array(text1.length).fill(null).map(row => Array(text2.length).fill(null))

        return checkCommonLetter(0, 0)

        function checkCommonLetter(t1Idx, t2Idx) {

            let result =  0
            
            if(t1Idx >= text1.length || t2Idx >= text2.length) {
                return 0
            }

            if(dp[t1Idx][t2Idx] !== null) {
                return dp[t1Idx][t2Idx]
            }
            
            if(text1[t1Idx] === text2[t2Idx]) {
                result = 1 + checkCommonLetter(t1Idx + 1, t2Idx + 1)
            } else {
                result = Math.max(checkCommonLetter(t1Idx + 1, t2Idx), checkCommonLetter(t1Idx, t2Idx + 1))
            }
            dp[t1Idx][t2Idx] = result
            return result
        }
    }
}
