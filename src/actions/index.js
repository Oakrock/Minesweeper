
export const setSizeDetail = size => ({
    type: "SET_SIZE_DETAIL",
    size
})

export const setMineCountDetail = mineCount => ({
    type: "SET_MINE_COUNT_DETAIL",
    mineCount
})

export const updateBoard = (board) => ({
    type: "UPDATE_BOARD",
    board
})

export const createNewBoard = (board) => ({
    type: "CREATE_NEW_BOARD",
    board
})

export const markSquareAsFlagged = id => ({
    type: "MARK_SQUARE_AS_FLAGGED",
    id
})

export const gameOver = () => ({
    type: "GAME_OVER"
})

export const playerWon = () => ({
    type: "PLAYER_WON"
})

export const GameStates = {
    BEFORE_GAME: "BEFORE_GAME",
    GAME_STARTED: "GAME_STARTED",
    GAME_OVER: "GAME_OVER",
    YOU_WIN: "YOU_WIN"
}

