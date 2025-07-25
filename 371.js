//371. Sum of Two Integers
function getSum(a, b) {

    while (b !== 0) {
        let carryOver = (a & b) << 1
        a = a ^ b
        b = carryOver
    }
    return a
}

