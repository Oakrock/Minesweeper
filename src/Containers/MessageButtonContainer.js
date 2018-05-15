import React from "react"
import {connect} from "react-redux"
import { createNewBoard } from "../actions";
import MessageButton from '../Components/MessageButton'
import {createBoard} from "../utils/board";

const mapStateToProps = (state, ownProps) => ({
    size: state.boardDetails.size,
    mineCount: state.boardDetails.mineCount,
})

const mapDispatchToProps = (dispatch) => ({
    onClick: (size, mineCount) => {dispatch(createNewBoard(createBoard(size, mineCount)))}
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MessageButton)
