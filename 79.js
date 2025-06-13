function exist(board, word) {

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (scan(i, j, 0)) {
                return true
            }
        }
    }
    return false

    function scan(y, x, idx) {

        if (idx === word.length) return true

        if (y >= board.length || x >= board[0].length || y < 0 || x < 0 || board[y][x] === '#' || board[y][x] !== word[idx]) {
            return false
        }

        board[y][x] = '#'

        let res = scan(y + 1, x, idx + 1) || scan(y, x + 1, idx + 1) || scan(y - 1, x, idx + 1) || scan(y, x - 1, idx + 1)

        board[y][x] = word[idx]

        return res
    }
}


