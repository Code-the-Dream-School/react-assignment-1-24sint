import React, {Component} from 'react';
import {PlayerContext} from './App';
import {Link} from 'react-router-dom';
import p1 from '../images/0.png';
import p2 from '../images/1.png';
 

export default class Info extends Component{
    render(){
    
    return(
       
  <PlayerContext.Consumer>
    {players => (
      <div className="board niceFont">
        <div className="row">
          <div>
            Name <img src={p1} alt="playerSymbol" value="" className="icon"/>
          </div>
          <div>
            Name <img src={p2} alt="playerSymbol" value="" className="icon"/>
          </div>
        </div>
        <div className="row together"  id="boardBtn">
            <div className="col-sm">
              <input type="text" name="player1" onChange = {players.updatePlayerName}/>
            </div>
            <div className="col-sm">
              <input type="text" name ="player2" onChange = {players.updatePlayerName}/>
            </div>
        </div>
        
          <Link to="/board">
            <button type="submit" onClick={players.startGame} className="btn btn-dark" id="boardBtn">Start Game</button> 
          </Link> 
      </div>
  )}

</PlayerContext.Consumer>
    )
  }
}

