
import React, { Component } from "react";
import Main from "./components/MainToggle";
import AddForm from "./components/addForm";
import Header from "./components/header";

import './css/main.scss';
import GamePanel from "./components/gamePanel";

class App extends Component {
  constructor() {
    super()
    this.state = {
      cardsArrayLength: '',
      randomArray: [],
    }
  }

  gameVisable() {
    //! Passed  random numbers to state and next a send this array to props...

    
  }


  render() {
    return (
      <div className="App">
        <Header />
          <AddForm>
          </AddForm>

          
          <Main onClick={() => this.gameVisable()} title="Zagraj">
            <GamePanel randomArray={this.state.randomArray} />
          </Main>

        
        
      </div>
      
    );
  }
}

export default App;

/*

import React, { Component } from 'react';
import Header from './components/header';
import GamePanel from './components/gamePanel';









class App extends Component {
  constructor() {
    super()
    this.state = {
      gameStatus: false,
      gameClass: 'hide',
      gameButton: 'active-button',
      gameButtonValue: 'Zagraj',
      cardsArrayLength: '',
      randomArray: [],
    }
  }

  gameVisable() {
    if (this.state.gameStatus !== true) {
      console.log(this.state.gameStatus)
      this.setState({
        gameStatus: true,
        gameClass: 'displayGame',
        gameButtonValue: 'Wróć',
        gameButton: 'disactive-button'
      })
    } else {
      console.log(this.state.gameStatus)
      this.setState({
        gameStatus: false,
        gameClass: 'hide',
        gameButtonValue: 'Zagraj',
        gameButton: 'active-button'
      })
    }


    //! Passed  random numbers to state and next a send this array to props...

    const retrievedObject = JSON.parse(localStorage.getItem('cards'))
    const cardsLength = Object.keys(retrievedObject).length
    const randomArray = Array.from({ length: cardsLength }, () => Math.floor(Math.random() * cardsLength));

    this.setState({
      randomArray,
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main className="main">
          <button className={`main--gameButton ${this.state.gameButton}`} onClick={() => this.gameVisable()} >{this.state.gameButtonValue}</button>
            <GamePanel status={this.state.gameClass} randomArray={this.state.randomArray} />
          </main>
       

      </div>
    );
  }
}

export default App;
*/