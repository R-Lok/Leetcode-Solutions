//268. Missing Number
/*
Initial solution:
- add each value in nums to hashmap 
- second iteration from 0 to nums.length: if i not in hashmap, then return
- but this still takes O(n) memory

Next:
- Use XOR instead. As each number XOR'd with itself = 0
- Iterate through 0 to n and XOR all the numbers together
- Iterate through nums array and XOR with the first iteration result
- The resulting value is the missing number

*/

function missingNumber(nums) {

    let xorProduct = 0

    for (let i = 0; i < nums.length + 1; i++) {
        xorProduct ^= i
    }

    for (let i = 0; i < nums.length; i++) {
        xorProduct ^= nums[i]
    }

    return xorProduct
}

