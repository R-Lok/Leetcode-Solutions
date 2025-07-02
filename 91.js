//91. Decode ways

function numDecodings(s) {

    let dp = Array(s.length + 1).fill(0) //extra slot to fit base case (empty string)
    dp[s.length] = 1 //base case (empty string)

    for (let i = s.length - 1; i >= 0; i--) {

        if (s[i] === '0') { //if this character is a 0 (undecodable)
            dp[i] = 0 //then this would lead to 0 solutions (since the leading 0 makes it irrelevant)
        } else {

            dp[i] = dp[i + 1] //base number of solutions for this index would be the number of solutions from the next index

            if (i + 1 < s.length && (s[i] === '1' || (s[i] === '2' && s[i + 1] < '7'))) {//if you can combine this + next index as one char:
                dp[i] += dp[i + 2] //add the additional solutions (decodings) from the rest of the array
            }
        }
    }
    return dp[0]
}

