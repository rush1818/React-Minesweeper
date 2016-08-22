import React from 'react';
import Minesweeper from '../minesweeper.js';
import Board from './board';

class Game extends React.Component {
  constructor(){
    super();
    const mineBoard = new Minesweeper.Board(10, 10);
    this.state = {board: mineBoard};
    this.updateGame = this.updateGame.bind(this);
  }

  updateGame(tile, flagged){
    if (flagged){
      tile.toggleFlag();
    } else {
      tile.explore();
    }
    this.setState({board: this.state.board});
  }

  restartGame(e){
    let b = new Minesweeper.Board(10, 10);
    document.getElementById("modal").className="modal";
    this.setState({board: b});
  }

  render(){
    let content = "";
    if (this.state.board.lost() || this.state.board.won()){
    document.getElementById("modal").className="modal is-active";
    document.getElementById("restartGame").addEventListener("click", this.restartGame.bind(this))
    content = (<div>
          <Board board={this.state.board}
            updateGame={this.updateGame}
            gameOver={this.state.board.lost()}
            gameWon={this.state.board.won()}/>

      </div>);
    }
    else {
      content = (<div>
        <Board board={this.state.board}
          updateGame={this.updateGame}
          gameOver={this.state.board.lost()}
          gameWon={this.state.board.won()}/>
      </div>);
    }
    return (
      <div>{content}</div>
    );
  }
}


export default Game;
// <div className="modal is-active">
//   <h2>Game Over</h2>
//   <h3 onClick={this.restartGame.bind(this)}><a href="#">Play Again?</a></h3>
// </div>
