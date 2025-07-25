//49. Group Anagrams
/*
Revisit later
- Was unfamiliar with how to return the map values as result. Had to look up api for map.

*/
function groupAnagrams(strs) {

    const map = new Map()

    for (let s of strs) {
        const count = Array(26).fill(0)
        for (let c of s) {
            count[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1
        }

        const key = JSON.stringify(count)
        if (map.has(key)) map.get(key).push(s)
        else map.set(key, [s])
    }
    return Array.from(map.values())
}

