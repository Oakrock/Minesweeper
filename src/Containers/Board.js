
import React from 'react'
import { connect } from 'react-redux'
import Square from '../Components/Square'
import {markSquareAsFlagged, updateBoard, gameOver, playerWon, GameStates} from '../actions'
import { selectSquare } from '../utils/board'
import './Board.css'

const Board = ({ board, flagSquare, selectSquareAction, endGame, playerWon, gameState, size }) => {

    if (board.filter(x => !x.isMine).every(x => x.hasBeenSelected) && gameState !== GameStates.YOU_WIN)
        playerWon();

    const generateSquare = (row) => {
        return row.map((square) => (<Square key={square.id}
                                            value={squareValue(square)}
                                            onClick={buttonOnClickFactory(square, board)}
                                            size={size}
                                            onRightClick={() => {flagSquare(square.id)}}/>))
    }

    const buttonOnClickFactory = (square, board) => {
        if (square.isMine)
            return endGame;

        return selectSquareAction(square, board);
    };

    const squareValue = square => {
        if (square.isFlagged)
            return 'F';

        return (square.hasBeenSelected) ? square.minesNear : "";
    };

    let testBoard = [...board];
    let rows = [];
    let i = 0;

    while(i < size)
    {
        rows[i] = testBoard.splice(0, size);
        i++;
    }

    return (
        <div className="board-container">
            <div className="board">
                {generateSquare(board)}
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    board: state.board,
    gameState: state.gameState,
    size: state.boardDetails.size

})

const mapDispatchToProps = (dispatch) => ({
    flagSquare: (id) => {dispatch(markSquareAsFlagged(id))},
    selectSquareAction: (square, board) =>  () => {dispatch(updateBoard(selectSquare(square, board)))},
    endGame: () => { dispatch(gameOver()) },
    playerWon: () => { dispatch(playerWon()) }
})

export default connect(mapStateToProps, mapDispatchToProps)(Board)