import React, { Component } from 'react';
import { connect } from 'react-redux'
import logo from '../logo.svg';
import './App.css';
import { GameStates } from '../actions'
import Board from './Board'
import MessageButtonContainer from "./MessageButtonContainer";


class App extends Component{

  render() {

      const {gameState} = this.props;

      //used for game over/you win screen
      let items = {};

      const getComponent = state => {switch (gameState)
      {
          case GameStates.BEFORE_GAME:
              items = {...items, message: null,
                                 messageButtonValue: "Start Game"}
              return MessageButtonContainer
          case GameStates.YOU_WIN:
              items = {...items, message: "You Win",
                                 messageButtonValue: "Restart"}
              return MessageButtonContainer
          case GameStates.GAME_OVER:
              items = {...items, message: "Game Over",
                                 messageButtonValue: "Restart"}
              return MessageButtonContainer
          default:
              return Board
      }}

      const Component = getComponent(gameState)

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">MineSweeper</h1>
        </header>
          <Component {...items}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    gameState: state.gameState,
    size: state.boardDetails.size,
    mineCount: state.boardDetails.mineCount
})


export default connect(mapStateToProps)(App);
