
//5. Longest Palindromic Substring

//check right to see if same letter
// if not same letter, check left to see if same as your right
// if neither, move to next loop

//for each character, try even-length palin and odd-length palin (O(2n)), update length/start if longer than prev


function longestPalindrome(s) {

    if (s.length === 0) {
        return ""
    }

    let length = 1
    let start = 0

    for (let i = 0; i < s.length; i++) {

        let left = i
        let right = i
        let currLength = 0

        if (s[left] === s[right]) {
            currLength = 1
            left -= 1
            right += 1
            while (left >= 0 && right < s.length && s[left] === s[right]) {
                currLength += 2

                if (currLength > length) {
                    start = left
                    length = currLength
                }
                left -= 1
                right += 1
            }
        }

        left = i
        right = i + 1
        currLength = 0

        if (s[left] === s[right]) {
            currLength = 2
            if (currLength > length) {
                start = left
                length = currLength
            }
            left -= 1
            right += 1

            while (left >= 0 && right < s.length && s[left] === s[right]) {
                currLength += 2
                if (currLength > length) {
                    start = left
                    length = currLength
                }
                left -= 1
                right += 1
            }
        }
    }

    return s.slice(start, start + length)
}

