//300. Longest Increasing subsequence
/*
Thinking:

At each element - you can take it or not (decision tree problem - meaning it can be a DP approach)
Work from bottom up: start the end
base case is last element -> length would be 1 cause no elements beyond it (memoize this value)
As you move to front: 
Check if current element is less than elements after it (iterate)
If less than, then retrieve memoized value for iterated element, + 1, then check if it is more than the current memoized value
    stored for the current element (not the iterated value, the outer loop value)

Keep track of the max as you go. 


 */

function lengthOfLIS(nums) {

    const dp = Array(nums.length).fill(1) //fill with 1s as minimum length is 1 (one element only)
    let max = 1 //base case

    for (let i = nums.length - 2; i >= 0; i--) {  //skip last element as it's definitely 1 (1 element only)
        let localMax = 1

        for (let j = i + 1; j < nums.length; j++) { //iterate from next element to end of array
            if (nums[i] < nums[j]) {
                localMax = Math.max(dp[j] + 1, localMax)
            }
        }
        dp[i] = localMax
        max = Math.max(localMax, max)
    }
    return max
}
