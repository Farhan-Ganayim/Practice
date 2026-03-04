function isValidSudoku(board) {
    // Check rows
    for (let i = 0; i < 9; i++) {
        let seen = {}
        for (let j = 0; j < 9; j++) {
            let cell = board[i][j]
            if (cell === '.') continue
            if (seen[cell]) return false
            seen[cell] = true
        }
    }

    // Check columns
    for (let j = 0; j < 9; j++) {
        let seen = {}
        for (let i = 0; i < 9; i++) {
            let cell = board[i][j]
            if (cell === '.') continue
            if (seen[cell]) return false
            seen[cell] = true
        }
    }

    // Check 3x3 boxes
    for (let boxRow = 0; boxRow < 3; boxRow++) {
        for (let boxCol = 0; boxCol < 3; boxCol++) {
            let seen = {}
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    let cell = board[boxRow * 3 + i][boxCol * 3 + j]
                    if (cell === '.') continue
                    if (seen[cell]) return false
                    seen[cell] = true
                }
            }
        }
    }

    return true
}

// Example usage:
let board = [
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
]

console.log(isValidSudoku(board))  // true