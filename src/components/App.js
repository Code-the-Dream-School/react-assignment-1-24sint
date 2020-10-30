import React, {Component} from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import Header from './Header';
import Info from './Info';
import Board from './Board';

export const PlayerContext = React.createContext();

class Game extends Component {
  
  constructor() {
    super();
    this.state = {
      player1: "",
      player2: "",
      start: false,
      count: 0
     
    };
  }
  updatePlayerName = (e)=> {
       this.setState({
         [e.target.name]: e.target.value
        
       });
  }
   
  startGame = (e) => {
    if(this.state.player1 === "" || this.state.player2 === ""){
        alert("Input field must be fill");
        e.preventDefault()
    } 

  }

  render(){
    return (
      <PlayerContext.Provider value={this}>
        <Router>
          <Header/>
        <Switch>
            <Route path="/info" exact component={Info}/>
            <Route path="/board" exact component={Board}/>
        </Switch>
        </Router>
      </PlayerContext.Provider>
    );
  }
}

export default Game;


