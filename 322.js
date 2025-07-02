//322. Coin Change
/*
Thinking:
Input array doesnt seem to be sorted -> need to sort in descending order

at each element, see if minusing will make the number go below 0
- if it does, move to next iteration (next coin)
- if not, subtract from amount (increment count), and decrement i (to repeat this iteration again)
- if end of array and amount is still > 0, then its impossible.

Reflections:
- Dynamic programming didn't come intutively once again
- Thought of the need to loop through each coin for each remaining amount 
- Needed to use hints



*/
function coinChange(coins, amount) {

    if (amount === 0) {
        return 0
    }

    let memo = new Map()

    coins.sort((a, b) => b - a)

    dfs(amount, 0)

    let result = memo.get(amount) && memo.get(amount) !== Infinity ? memo.get(amount) : -1

    return result

    function dfs(remainingAmount) {

        if (remainingAmount === 0) {
            return 0
        }

        if (remainingAmount < 0) {
            return null
        }

        if (memo.has(remainingAmount)) {
            return memo.get(remainingAmount)
        }

        let min = Infinity

        for (let c of coins) {
            let requiredCoins = dfs(remainingAmount - c)

            if (requiredCoins !== null && requiredCoins + 1 < min) {
                min = requiredCoins + 1
            }
        }
        memo.set(remainingAmount, min)
        return min
    }
}
