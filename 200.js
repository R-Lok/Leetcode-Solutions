function numIslands(grid) {

    let counter = 0


    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {

            if (grid[i][j] === "1") {
                dfs(i, j)
                counter += 1
            }
        }
    }
    return counter


    function dfs(i, j) {

        if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] === "0") {
            return
        }

        grid[i][j] = "0"

        dfs(i + 1, j)
        dfs(i - 1, j)
        dfs(i, j + 1)
        dfs(i, j - 1)
    }
}

/* Problems I encountered
- Initially tried to just iterate through array and check above and left to see if it's connected
- That initial solution didn't consider what if left and above are 0 but connected to the right and upwards

e.g.
[0, 1, 0]
[0, 1, 0]
[1, 1, 0]

*/