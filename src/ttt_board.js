import React from 'react';
import Box from './box';

export default class Board extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      playerOne: true,
      board : [["-","-","-"],
               ["-","-","-"],
               ["-","-","-"]]
    };
  }

  setBoard(itemX, itemY) {
    console.log("from the setBoard Method")
    var stateCopy = Object.assign({}, this.state);
    if(stateCopy.board[itemY][itemX] === "-"){
      let val = this.state.playerOne ? 'x' : 'O';
      stateCopy.board[itemY][itemX] = val;
      stateCopy.playerOne = !stateCopy.playerOne;
      this.setState(stateCopy);
    }
  }

  render() {
    let theBoard = this.state.board.map((itemY, Y)=> {
      return (<div key={Y} className='Row'> {itemY.map((itemX, X) =>{
        return (<Box value={this.state.board[Y][X]} key={X} Clicked={() => this.setBoard(X,Y)}/>);
      })
    }</div>)
    })
  return (<div>{theBoard}</div>)
  }
}
