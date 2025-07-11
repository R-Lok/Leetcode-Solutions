//48. Rotate Image
/**
 * Notes:
 * Swap row with it's opposite row to easily adjust the diagonals to be where they are supposed to be
 * Then, now just need to swap the elements on the left/bottom right/top corners on the diagonals.
 */

function rotate(matrix) {


    for (let i = 0; i < matrix.length / 2; i++) {
        [matrix[i], matrix[matrix.length - 1 - i]] = [matrix[matrix.length - 1 - i], matrix[i]]
    }

    for (let i = 0; i < matrix.length - 1; i++) {
        for (let j = i + 1; j < matrix[i].length; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
        }
    }

    return matrix
}
