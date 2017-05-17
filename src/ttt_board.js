import React from 'react';
import Box from './box';

export default class Board extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      board : [["-","-","-"],
               ["-","-","-"],
               ["-","-","-"]]
    };
  }

  setBoard(itemX, itemY) {
    console.log("from the setBoard Method")
    var stateCopy = Object.assign({}, this.state);
    stateCopy.board[itemY][itemX] = 'x';
    this.setState(stateCopy); 
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
