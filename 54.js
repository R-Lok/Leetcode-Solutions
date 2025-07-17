//54. Spiral Matrix
/* 
Revisit this problem in future - solution could be further optimized 

Initial thinking:
- Need to adjust top/bottom left/right boundaries per iteration
- Can figure out top/bottom/left/right using the iteration
- Make use of a counter to know when to stop the iterations (when counter === number of elements in matrix)

Notes:
- Need to check for counter === numElements within while loop, else appending additional elements which will lead to infinite loop
- Above would occur if the square is odd numbers e.g. 3x3, (because it should terminate after first for loop of second iteration)
    , but it keeps going (it should stop at the 5)

*/

function spiralOrder(matrix) {

    const numElements = matrix.length * matrix[0].length

    const COLS = matrix[0].length
    const ROWS = matrix.length

    let counter = 0

    let iteration = 0

    let result = []

    while (counter !== numElements) {

        for (let i = iteration; i < COLS - iteration; i++) {
            result.push(matrix[iteration][i])
            counter++
        }
        if (counter === numElements) break;

        for (let i = iteration + 1; i < ROWS - iteration; i++) {
            result.push(matrix[i][COLS - iteration - 1])
            counter++
        }
        if (counter === numElements) break;

        for (let i = COLS - 2 - iteration; i >= iteration; i--) {
            result.push(matrix[ROWS - 1 - iteration][i])
            counter++
        }
        if (counter === numElements) break;

        for (let i = ROWS - 2 - iteration; i > iteration; i--) {
            result.push(matrix[i][iteration])
            counter++
        }
        iteration++
    }
    return result
}
