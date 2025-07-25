//1. Two Sum
/*
There may be a more readable solution by passing array + element index to Map() constructor
*/
function twoSum(nums, target) {

    const map = new Map()

    for (let i = 0; i < nums.length; i++) {
        const remainder = target - nums[i]
        if (map.has(remainder)) return [map.get(remainder), i]
        map.set(nums[i], i)
    }
}

