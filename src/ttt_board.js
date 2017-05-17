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
      let val = this.state.playerOne ? 'X' : 'O';
      stateCopy.board[itemY][itemX] = val;
      stateCopy.playerOne = !stateCopy.playerOne;
      this.setState(stateCopy);
      this.checkWinner(val);
    }
  }

  pickRandom(counter) {
   if(counter === undefined) {
     counter = 0;
   } 
   console.log(counter);
   const choiceA = Math.floor(Math.random() * 3);
   const choiceB = Math.floor(Math.random() * 3);
   console.log(self.state.board[choiceA][choiceB]);
   //choiceA selects the first array in the board array, choiceB selects the index of that array
   if(self.state.board[choiceA][choiceB] === "-") {
     self.setBoard(choiceB, choiceA);
   }
   else{
     if(counter > 20){
       return;
     }
      self.pickRandom(counter + 1);
   }
  }

  checkWinner(p){
    let b = this.state.board;
    if((b[0][0] === p && b[0][1] === p && b[0][2] === p)||
      (b[1][0] === p && b[1][1] === p && b[1][2] === p)||      
      (b[2][0] === p && b[2][1] === p && b[2][2] === p) ||

      (b[0][0] === p && b[1][0] === p && b[2][0] === p)||
      (b[0][1] === p && b[1][1] === p && b[2][1] === p)||      
      (b[0][2] === p && b[1][2] === p && b[2][2] === p)||

      (b[0][0] === p && b[1][1] === p && b[2][2] === p)||
      (b[0][2] === p && b[1][1] === p && b[2][0] === p)
    ) {
      console.log(`${p} Wins!`);
    }else{
      console.log('no winner')
    }
  }

  render() {
    let theBoard = this.state.board.map((itemY, Y)=> {
      return (<div key={Y} className='Row'> {itemY.map((itemX, X) =>{
        return (<Box value={this.state.board[Y][X]} key={X} Clicked={() => 
                {this.setBoard(X,Y)
                self = this;
                 setTimeout(this.pickRandom, 1000)}
                 } />);
      })
    }</div>)
    })
  return (<div>{theBoard}</div>)
  }
}
