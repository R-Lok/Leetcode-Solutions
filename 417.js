class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {

        const ROWS = heights.length
        const COLS = heights[0].length

        const pac = new Array(ROWS).fill().map(() => new Array(COLS).fill(false))
        const atl = new Array(ROWS).fill().map(() => Array(COLS).fill(false))
        const res = []

        function dfs(y, x, ocean) {

            ocean[y][x] = true

            const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]

            for(const [dr, dc] of directions) {

                const nr = y + dr
                const nc = x + dc

                if(nr >= 0 && nc >= 0 && nr < ROWS && nc < COLS && !ocean[nr][nc] && heights[nr][nc] >= heights[y][x]) {
                    dfs(nr, nc, ocean)
                }
            }
        }

        for(let r = 0; r < heights.length; r++) {
            dfs(r, 0, pac)
            dfs(r, COLS - 1, atl)
        }

        for(let c = 0; c < heights[0].length; c++) {
            dfs(0, c, pac)
            dfs(ROWS- 1, c, atl)
        }

        for(let r = 0; r < ROWS; r++) {
            for(let c = 0; c < COLS; c++) {
                if(pac[r][c] && atl[r][c]) {
                    res.push([r, c])
                }
            }
        }

        return res
    }
}

/*
Notes 
- Was checking oceans array instead of heights array when comparing heights
- Iterating over the edge cells logic required a bit of visualization

*/