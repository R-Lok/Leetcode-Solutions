class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {

        let numComponents = 0

        const visited = new Set()

        const adjList = Array.from({length:n}, () => [])

        for(let [u,v] of edges) {
            adjList[u].push(v)
            adjList[v].push(u)
        }

        function dfs(node) {

            if(visited.has(node)) return

            visited.add(node)
            for(let i = 0; i < adjList[node].length; i++) {
                dfs(adjList[node][i])
            }
        }

        for(let i = 0; i < adjList.length; i++) {

            if(!visited.has(i)) {
                dfs(i)
                numComponents++
            }
        }

        return numComponents
    }
}
