import React from 'react';
import {PlayerContext} from './App'
import {Link} from 'react-router-dom';
import logo from '../images/logo.png';


const Header = (props) => { 
  return(
    <PlayerContext.Consumer>
      {players =>(
        <div className="center niceFont">
            <img src={logo} alt="Logo" className="logo"/>
            <h1>TIC TAC TOE</h1>
            <Link to="/Info">
              { players.state.start ? "" :<button onClick={ () => players.startGame } className="btn btn-dark">Start</button> }  
            </Link>
        </div>  
      )}
  </PlayerContext.Consumer>
  );
}

export default Header;
