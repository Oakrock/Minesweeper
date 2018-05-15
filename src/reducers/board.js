
import { selectSquare} from '../utils/board'

const board = (state = [], action) => {

    switch (action.type){
        case "UPDATE_BOARD":
            return action.board;
        case "CREATE_NEW_BOARD":
            return action.board;
        case "RESET_BOARD":
            return action.board;
        case "MARK_SQUARE_AS_FLAGGED":
            return state.map((square) => {
                if (square.id === action.id && !square.hasBeenSelected)
                    return {...square, isFlagged: !square.isFlagged}

                return square
        });
        case "MARK_SQUARE_AS_SELECTED":
            const square = state.find(x => x.id === action.id);

            return selectSquare(square, state)
        default:
            return state;
    }
}

export default board
