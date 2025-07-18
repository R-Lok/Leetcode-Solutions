//190. Reverse Bits
/*
Notes:
Didn't know how to force unsigned integer in JavaScript, had to look it up ( >>> 0 ) to force unsigned interpretation
Otherwise, pretty straightforward.


*/

function reverseBits(n) {

    let result = 0
    let bits = 32

    for (let i = 0; i < bits; i++) {
        result <<= 1
        result += (n & 1)
        n >>= 1
    }

    return result >>> 0
}
