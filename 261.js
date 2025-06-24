class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {

        const map = new Map()
        const visited  = new Set()

        for(let i = 0; i < n; i++) {
            map.set(i, [])
        }

        for(let [n1, n2] of edges) {
            map.get(n1).push(n2)
            map.get(n2).push(n1)
        }

        return dfs(0, -1) && visited.size === n

        function dfs(n, parent) {

            visited.add(n)

            for(let connected of map.get(n)) {
                if(connected === parent) {
                    continue
                }

                if(visited.has(connected) || !dfs(connected, n)) {
                    return false
                }
            }

            return true
        }
    }
}

/*
Solution in Neetcode formatting (since problem is premium on leetcode)
*/