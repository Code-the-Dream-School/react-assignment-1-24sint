import React, {Component, Fragment}  from 'react';
import Cell from './Cell';
import {PlayerContext} from './App';
import {Link} from 'react-router-dom';
import p1 from '../images/1.png';
import p2 from '../images/0.png';

class Board extends Component {
  
  constructor(){
    super()
    this.state={
      board1: [0,1,2],
      board2: [3,4,5],
      board3: [6,7,8],
      firstPlayer: true,
      buttonStart:false,
      playersResult: [null,null,null,null,null,null,null,null,null]
    }
  }
  
  render(){
    const playerSymbol1 = <img src={p1} alt="playerSymbol" className="icon"/>
    const playerSymbol2 = <img src={p2} alt="playerSymbol" className="icon"/>
    
      return(
        <PlayerContext.Consumer>
            {players =>(
             <Fragment>
           
                <div className="together niceFont">
                    <p>{playerSymbol1}{players.state.player1}</p>,
                    <p>{playerSymbol2}{players.state.player2}</p>
              
                </div> 
              <div className="board niceFont">
                  
                    <div className="row">{this.state.board1.map(cellId =>
                        <Cell key = {cellId} id={cellId} data={this} playerData={players.state}/>)}
                    </div>
                    <div className="row">{this.state.board2.map(cellId =>
                        <Cell key = {cellId} id={cellId} data={this} playerData={players.state}/>)}
                      </div>
                    <div className="row">{this.state.board3.map(cellId =>
                        <Cell key = {cellId} id={cellId} data={this} playerData={players.state}/>)}
                    </div>      
              </div>
                <div className="together niceFont" id="boardBtn">
                      <Link to="/start"><button onClick={()=>{players.setState({buttonStart:true});}}  className="btn btn-dark">New Game</button></Link> 
                      <button onClick={() => window.location.reload(false)} className="btn btn-dark" >Reset</button>
                </div>
              </Fragment>
            )}

        </PlayerContext.Consumer>
      );
  }
}
export default Board;

