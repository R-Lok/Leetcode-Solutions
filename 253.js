//253. Meeting Rooms II

/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

/*
Redo at a future date for practice. 
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {

        const starts = []
        const ends = []
        let max = 0
        let currRooms = 0

        for(let i = 0; i < intervals.length; i++) {
            starts.push(intervals[i].start)
            ends.push(intervals[i].end)
        }

        starts.sort((a, b) => a - b)
        ends.sort((a, b) => a - b)

        let startIdx = 0
        let endIdx = 0

        while(endIdx !== ends.length) {

            if(starts[startIdx] < ends[endIdx]) {
                startIdx++
                currRooms++
                max = Math.max(max, currRooms)
            } else {
                endIdx++
                currRooms--
            }
        }

        return max
    }
}
