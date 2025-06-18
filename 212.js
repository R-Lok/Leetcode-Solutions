class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {
        const result = []

        for(let word of words) {
            searchWord(word)
        }
        return result

        function searchWord(word) {
            for(let r = 0; r < board.length; r++) {
                for(let c = 0; c < board[r].length; c++){
                    if(board[r][c] === word[0]) {  
                        if(searchLetter(r, c, word, 0)) {
                            result.push(word)
                            return
                        }
                    }
                }
            }
        }

        function searchLetter(y, x, word, index) {
            if(index === word.length) {
                return true
            }
            if (y < 0 || x < 0 || y > board.length -1 || x > board[0].length - 1 || board[y][x] !== word[index]) {
                return false
            }

            const temp = board[y][x]
            board[y][x] = '#'

            let res = searchLetter(y + 1, x, word, index + 1) || searchLetter(y - 1, x, word, index + 1) || searchLetter(y, x + 1, word, index + 1) || searchLetter(y, x - 1, word, index + 1)

            board[y][x] = temp
        
            return res
        }
    }
}

//This solution is not the most optimal one