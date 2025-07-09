//55. Jump game
/*
If not at last spot and elem is 0, return false
Naive approach:
- For each elem, jump to each possible elem it could go to and continue from there
Bottom up approach:
Go from end cell, check each cell in front of it and see if it can reach the end.
    If it can reach the end, update the end to be this cell.

*/

class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {

        let end = nums.length - 1

        for(let i = nums.length - 2; i >= 0; i--) {
            if(i + nums[i] >= end) {
                end = i
            }
        }
        return end === 0
    }
}
