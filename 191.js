//191. Number of 1 Bits
/**
 * Thinking:
 * - Know to use bitwise operations
 * - Use bitwise AND to check if rightmost bit is 1
 * - Shift n to the right each iteration, until n is 0 (no more 1 bits)
 * 
 */

function hammingWeight(n) {

    let res = 0

    while (n !== 0) {

        if (n & 1) {
            res++
        }
        n >>= 1
    }
    return res
}

