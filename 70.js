//70. Climbing Stairs

/*
Easier to figure out solution if you draw out dp problems.
*/

function climbStairs(n) {

    let n1 = 1
    let n2 = 1

    for (let i = 0; i < n - 1; i++) {
        let temp = n1
        n1 = n1 + n2
        n2 = temp
    }
    return n1
}