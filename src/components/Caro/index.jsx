import React from 'react';
import PropTypes from 'prop-types';

import './game.css';
import Board from './board'

// Game.propTypes = {
  
// };

function Game() {
    return (
      <div className="game">

        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    )
}


export default Game;