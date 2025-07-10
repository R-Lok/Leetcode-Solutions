//57. Insert Interval
/*
Planning/thinking:
-Iterate through the array
-At each index, check current element and the next element to:
    -if newInterval's first value is above current element's second and second value is below next element's first value: insert at next index, break.
    -if newInterval's first value is below current element's second, and second value is above next element's first: replace current
        element's first and second values (merge all three intervals) and splice out the next element,
    -if newInterval's first value is below current element, but second value is below next element's first: merge new interval and the current
    -if newInterval's first value is above current element, but second value is above next element's first; merge new interval and the next

-Above (original plan, too complex)
-Instead: element's end is less than newInterval's start, push to output
-Once reach elem that does not fulfill that condition: check remaining elems to see if their start is less than or equal newInterval's end
    - if so, merge them
    - continue until merged all elems that need to be merged into the interval
-Once merging done, push the merged interval to output
-Push any remaining intervals into the output


 */

function insert(intervals, newInterval) {

    let currIdx = 0

    const output = []

    while (currIdx < intervals.length && intervals[currIdx][1] < newInterval[0]) {
        output.push(intervals[currIdx])
        currIdx++
    }

    while (currIdx < intervals.length && intervals[currIdx][0] <= newInterval[1]) {
        newInterval[0] = Math.min(intervals[currIdx][0], newInterval[0])
        newInterval[1] = Math.max(intervals[currIdx][1], newInterval[1])
        currIdx++
    }

    output.push(newInterval)

    while (currIdx < intervals.length) {
        output.push(intervals[currIdx])
        currIdx++
    }

    return output

}

