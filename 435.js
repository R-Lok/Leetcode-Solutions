//435. Non-overlapping intervals
function eraseOverlapIntervals(intervals) {

    intervals.sort((a, b) => {

        if (a[0] !== b[0]) {
            return a[0] - b[0]
        }
        return a[1] - b[1]
    })

    let end = intervals[0][1]
    let removed = 0

    for (let i = 1; i < intervals.length; i++) {
        let localStart = intervals[i][0]
        let localEnd = intervals[i][1]

        if (localStart >= end) {
            end = localEnd
        } else {
            end = Math.min(end, localEnd)
            removed++
        }
    }
    return removed
}

