//347. Top K frequent elements
/**
 * Need to get more used to the extenral Queue library for js
 * 
 */
function topKFrequent(nums, k) {

    const dict = {}

    for (let i = 0; i < nums.length; i++) {
        if (Object.hasOwn(dict, nums[i])) dict[nums[i]]++
        else dict[nums[i]] = 1
    }

    const mpq = MaxPriorityQueue.fromArray(Object.keys(dict), x => dict[x])

    const output = []

    for (let i = 0; i < k; i++) {
        output.push(Number(mpq.dequeue()))
    }
    return output
}

