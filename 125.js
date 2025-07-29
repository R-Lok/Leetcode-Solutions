//125. Valid Palindrome

function isPalindrome(s) {

    let l = 0
    let r = s.length - 1

    while (l < r) {
        if (!isAlphaNum(s[l])) {
            l++
            continue
        }
        if (!isAlphaNum(s[r])) {
            r--
            continue
        }
        if (s[l].toLowerCase() !== s[r].toLowerCase()) return false
        l++
        r--
    }
    return true

}

function isAlphaNum(c) {
    if (c <= "Z" && c >= "A") return true
    if (c <= "z" && c >= "a") return true
    if (c <= '9' && c >= '0') return true
    return false
}

