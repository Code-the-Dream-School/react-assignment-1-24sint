import React, {Component}  from 'react';
import p1 from '../images/1.png';
import p2 from '../images/0.png';


let count = 0;
let isWinnerFound = false;
class  Cell extends Component {

  constructor(){
    super()
    this.state={
        player: "",
        buttonSymbol: [p1,p2,p1,p2,p1,p2,p1,p2,p1]      
    }
  }

checkWinner(playersResult){

  const winningOptions = 
       [
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
      ]

winningOptions.forEach( result => {

    let [x,y,z] = result;   
    if(playersResult[x] !== null && playersResult[x] === playersResult[y] && playersResult[x] === playersResult[z]){

      isWinnerFound = true;
        
    }
     
  })
    return isWinnerFound;
}

updatePlayer (i) {

  if(isWinnerFound){
    return;
  } 
    const playersResult = this.props.data.state.playersResult.slice();
    playersResult[i] = this.props.data.state.firstPlayer ? 'X' : 'O';

  if(count < 9){
    this.setState({
        player: this.state.buttonSymbol[count], 
    })
        count++

    this.props.data.setState({
      firstPlayer: !this.props.data.state.firstPlayer,
      playersResult: playersResult
      
    });
  }

  let isWinner = this.checkWinner(playersResult)
      if(isWinner){
        const winningPalyer = this.state.player === p1 ? this.props.playerData.player1 : this.props.playerData.player2;
        alert(winningPalyer +  " is a winner");
      }
  }

render(){ 
  return (
      <button id = {this.props.id} onClick = {(e) => 
        this.updatePlayer(Number(e.target.id))} className="square btn btn-outline-secondary">
        {this.state.player ?<img src={this.state.player} alt="playerSymbol" className="icon"/> : ""}
      </button>
    );
  }
}

export default Cell;
