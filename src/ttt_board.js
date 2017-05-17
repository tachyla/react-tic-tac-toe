import React from 'react';
export default class Board extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      board : [["-","-","-"],
               ["-","-","-"],
               ["-","-","-"]]
    };
  }

  render() {
    let theBoard = this.state.board.map((itemY, index)=>{
      return (<div key={index} className='Row'>{itemY.map((itemX, index) =>{
        return (<span key={index}>{itemX}</span>);
      })
    }</div>)
    })
  return (<div>{theBoard}</div>)
  }
}
