//128. Longest Consecutive Sequence

/*
- time complexity of nested loop is still O(n) because each element would ever only be visited once
- Set insertion in js is O(1) (hashset)
*/
function longestConsecutive(nums) {

    let max = 0
    const set = new Set(nums)

    for (let num of set) {
        if (set.has(num - 1)) continue

        let seq = 1
        while (set.has(num + seq)) {
            seq++
        }
        max = Math.max(seq, max)
    }
    return max
}

