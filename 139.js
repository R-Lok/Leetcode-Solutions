//139. Word break

function wordBreak(s, wordDict) {

    let res = false
    let map = new Map()

    return checkStart(0)

    function checkStart(startIndex) {

        if (startIndex === s.length) {
            return true
        }

        if (map.has(startIndex)) {
            return map.get(startIndex)
        }

        for (let i = 0; i < wordDict.length; i++) {

            if (s.startsWith(wordDict[i], startIndex)) {
                if (checkStart(startIndex + wordDict[i].length)) {
                    map.set(startIndex, true)
                    return true
                }
            }
        }
        map.set(startIndex, false)
        return false
    }
}

