"use strict"

import React from 'react'
import { connect } from 'react-redux'
import { Game } from './Game.jsx'
import { moveLeft, moveRight, descend } from '../actions.js'

export class Tetris extends React.Component {
  componentWillMount() {
    this.gameSpecs = {
      fieldWidth: 10,
      fieldHeight: 20,
      blockSize: 20      
    }

    document.onkeydown = (e) => {
      if (e.keyCode === 40) {
        this.props.dispatch(descend());
      }
      if (e.keyCode === 37) {
        this.props.dispatch(moveLeft());
      }
      if (e.keyCode === 39) {
        this.props.dispatch(moveRight());
      }
    }
  }

  render() {
    return (
      <div>
        <Game
          currentPiece={this.props.currentPiece}
          gameSpecs={this.gameSpecs}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentPiece: state.get('currentPiece')
  }
}

export const TetrisContainer = connect(mapStateToProps)(Tetris);