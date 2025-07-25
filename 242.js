//242. Valid Anagram
/*
O(1) in space because the maximum size of each map is 26 (number of alphabet letters)

 */

function isAnagram(s, t) {

    const sMap = new Map()
    const tMap = new Map()

    if (s.length !== t.length) return false

    for (let i = 0; i < s.length; i++) {
        if (sMap.has(s[i])) sMap.set(s[i], sMap.get(s[i]) + 1)
        else sMap.set(s[i], 1)
    }

    for (let i = 0; i < t.length; i++) {
        if (tMap.has(t[i])) tMap.set(t[i], tMap.get(t[i]) + 1)
        else tMap.set(t[i], 1)
    }

    for (let [key, value] of sMap.entries()) {
        if (value !== tMap.get(key)) return false
    }
    return true
}

