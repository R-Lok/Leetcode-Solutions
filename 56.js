//56. Merge intervals
/* 
planning:

sort the input into order, elements with lowest starts first, if equal, then whichever has lower end point

push first element into output array

- Iterate through rest of intervals array:
- For each, check the last appended interval to output
- if start of current element is equal or less than last appended:
    - change last appended's value to the min start, and max end of the two
- if start of current element ISNT equal or less, then just append to the output
*/
function merge(intervals) {

    const result = []

    if (intervals.length === 0) return intervals

    intervals.sort(sortIntervals)

    result.push(intervals[0])

    for (let i = 1; i < intervals.length; i++) {

        let last = result.length - 1

        if (intervals[i][0] <= result[last][1]) {
            result[last] = [Math.min(intervals[i][0], result[last][0]), Math.max(intervals[i][1], result[last][1])]
        } else {
            result.push(intervals[i])
        }
    }

    return result

    function sortIntervals(a, b) {
        if (a[0] !== b[0]) {
            return a[0] - b[0]
        }
        return a[1] - b[1]
    }
}

