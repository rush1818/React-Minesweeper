import React from 'react';
import Tile from './tile';

class Board extends React.Component {
  constructor(props){
    super(props);
    this.state = {won: false};
  }
  render(){
    const abc = this;
    const rows = this.props.board.grid.map((row, idx) => {
      const tiles = row.map((tile, idx2) => {
        return (<Tile
          updateGame={abc.props.updateGame}
          tile={tile} key={[idx, idx2]}
          gameOver={this.props.gameOver}
          gameWon={this.props.gameWon}/>);
      });


      return (
        <div className="group" key={idx}>
          {tiles}
        </div>
      );
    });

    return (
    <div>
      {rows}
    </div>
  );
  }
}

export default Board;
