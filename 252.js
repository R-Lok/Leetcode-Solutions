//252. Meeting rooms
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
thinking:

sort all the Intervals first, by start time (and then end time if start time equal)
iterate through intervals
if startTime is less than the previous' end, then return false

 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {

        intervals.sort( (a,b) => {

            if(a.start !== b.start) {
                return a.start - b.start
            }
            return a.end - b.end
        })

        for(let i = 1; i < intervals.length; i++) {

            if(intervals[i].start < intervals[i - 1].end) {
                return false
            }
        }
        return true
    }
}
