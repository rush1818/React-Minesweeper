import React from 'react';

class Tile extends React.Component {
  constructor(props){
    super(props);
    // debugger
    this.state = {bombed: this.props.tile.bombed,
      explored: this.props.tile.explored,
      flagged: this.props.tile.flagged};

  }

  handleClick(e){
    e.preventDefault();
    let flagged = e.altKey;
    this.props.updateGame(this.props.tile, flagged);
  }

  componentWillReceiveProps(newProps){
    this.setState({bombed: newProps.tile.bombed,
      explored: newProps.tile.explored,
      flagged: newProps.tile.flagged});
  }

  render(){
    let tileClass = "tile";
    let text = 0;
    this.props.tile.neighbors().forEach(tile=>{
      if (tile.bombed){
        text+=1;
      }
    });

    if(this.state.bombed && this.state.explored){
      tileClass = "tile bombed";
      text ="";
    } else if (this.state.explored){
      tileClass = "tile explored";
    } else if (this.state.flagged){
      tileClass = "tile flagged";
    } else{
      text = "";
    }
    text = text === 0 ? "" : text;
    // debugger
    if (this.props.gameOver && this.state.bombed){
      tileClass = "tile bombed";
      text ="";

    }

    return (
      <div onClick={this.props.gameOver || this.props.gameWon ? "" : this.handleClick.bind(this)} className={tileClass}>{text}</div>
    );
  }
}

export default Tile;
