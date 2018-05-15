import { GameStates } from '../actions'

const gameState = (state = GameStates.BEFORE_GAME, action) => {

    switch(action.type){
        case "CREATE_NEW_BOARD":
            return GameStates.GAME_STARTED
        case "GAME_OVER":
            return GameStates.GAME_OVER
        case "PLAYER_WON":
            return GameStates.YOU_WIN
        default:
            return state
    }
}

export default gameState