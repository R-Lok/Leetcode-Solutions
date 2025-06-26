//269 Alien Dictionary
//Solution in Neetcode format
/* 
Struggled a little to figure out the dfs logic
Forgot to implement logic to add remaining letters to the dict (after a mismatch in characters between w1 and w2 found)
- Implemented the character loop in the beginning of the foreignDictionary function to address this (so all letters are in dict to begin with)

*/


class Solution {
    /**
     * @param {string[]} words
     * @returns {string}
     */
    foreignDictionary(words) {

        let res = []
        let dict = new Map()

        for(let word of words) {
            for (let char of word) {
                if(!dict.has(char)) {
                    dict.set(char, [])
                }
            }
        }

        for(let i = 0; i < words.length - 1; i++) { //Stop before last word (nothing to compare to)
            if(!compareWords(words[i], words[i+1])) {
                return ""
            }
        }

        const firstChar = words[0][0]
        const visited = {}

    
        function compareWords(w1, w2) {

            let i = 0

            while(i < w1.length && i < w2.length) {                
                let char1 = w1[i]
                let char2 = w2[i]

                if(char1 !== char2) {
                    dict.get(char1).push(char2)
                    break
                }
                i++
            }

            if(i === w2.length && i !== w1.length) {
                return false
            }
            return true
        }

        function dfs(char) {
            
            if(char in visited) return visited[char]

            visited[char] = true

            for(let c of dict.get(char)) {
                if(dfs(c)) return true
            }

            visited[char] = false
            res.push(char)
            return false
        }


        for(let char of dict.keys()) {
            if(dfs(char)) return ""
        }
        return res.reverse().join('')
    }

}