import { combineReducers } from 'redux'
import board from "./board"
import boardDetails from "./boardDetails"
import gameState from "./gameState"

export default combineReducers({
    board,
    boardDetails,
    gameState
})