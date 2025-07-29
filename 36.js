//36. Valid Sudoku
/*
- Drawing out the layout of the grid and numbering the subgrids helped figure out equation for getting what subgrid each cell is part of
*/
function isValidSudoku(board) {

    const rowMaps = []
    const colMaps = []
    const gridMaps = []

    for (let i = 0; i < board.length; i++) {
        rowMaps[i] = new Set()
        colMaps[i] = new Set()
        gridMaps[i] = new Set()
    }

    for (let r = 0; r < board.length; r++) {
        for (let c = 0; c < board[r].length; c++) {
            if (board[r][c] === '.') continue

            let value = board[r][c]

            if (rowMaps[r].has(value)) return false
            if (colMaps[c].has(value)) return false

            let gridNum = Math.floor(r / 3) * 3 + Math.floor(c / 3)

            if (gridMaps[gridNum].has(value)) return false

            rowMaps[r].add(value)
            colMaps[c].add(value)
            gridMaps[gridNum].add(value)
        }
    }
    return true
}

