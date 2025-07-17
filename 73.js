//73. Set Matrix Zeroes
/*
Thinking:
- Use the top row/leftmost column to indicate if a row/column needs to be replaced with 0s on first pass of entire matrix
- on second pass, just check the top most row and leftmost column (excluding [0][0]) - if 0, replace it's entire row/column with 0s

- Top left element [0][0] will be an issue - how to indicate whether row/col is to be overwritten
    - needs an extra variable to record whether its row, or col, or both being replaced with 0s
    - the extra variable and [0][0] need to be checked last, as overwriting the top row/left most column early will corrupt the solution

Workflow:
- Check [0][0], if 0, then set flags to overwrite both top row and leftmost column
- Check top row, if any is zero; set overwriteTopRow to true
- Check left most column, if any is zero; set overwriteLeftCol to true
- check the rest of the array starting from elem [1][1] (no need to check top row and leftmost col again)
    - if any elem is 0, set it's left most element and top most element of its row/col to 0
- Second pass: iterate through top row and leftmost column, ignoring [0][0]
    - if any is zero: run loop to set it's row or col to all 0s
- finally: check the flags for [0][0], and overwrite top row/leftmost col accordingly if either flag is true.
*/

function setZeroes(matrix) {
    let overwriteTopLeftRow = false
    let overwriteTopLeftCol = false

    if (matrix[0][0] === 0) {
        overwriteTopLeftRow = true
        overwriteTopLeftCol = true
    }

    for (let c = 1; c < matrix[0].length; c++) {
        if (matrix[0][c] === 0) {
            overwriteTopLeftRow = true
        }
    }

    for (let r = 1; r < matrix.length; r++) {
        if (matrix[r][0] === 0) {
            overwriteTopLeftCol = true
        }
    }

    for (let r = 1; r < matrix.length; r++) {
        for (let c = 1; c < matrix[0].length; c++) {
            if (matrix[r][c] === 0) {
                matrix[r][0] = 0
                matrix[0][c] = 0
            }
        }
    }

    for (let c = 1; c < matrix[0].length; c++) {
        if (matrix[0][c] === 0) {
            for (let r = 1; r < matrix.length; r++) {
                matrix[r][c] = 0
            }
        }
    }

    for (let r = 1; r < matrix.length; r++) {
        if (matrix[r][0] === 0) {
            for (let c = 1; c < matrix[0].length; c++) {
                matrix[r][c] = 0
            }
        }
    }

    if (overwriteTopLeftCol) {
        for (let r = 0; r < matrix.length; r++) {
            matrix[r][0] = 0
        }
    }

    if (overwriteTopLeftRow) {
        for (let c = 0; c < matrix[0].length; c++) {
            matrix[0][c] = 0
        }
    }

    return matrix

}

