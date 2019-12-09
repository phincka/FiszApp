import React, { Component } from 'react';
import AddForm from './components/addForm';
import GamePanel from './components/gamePanel';

import './css/main.scss';


class App extends Component {
  constructor() {
    super()
    this.state = {
      formStatus: false,
      gameStatus: false,
      formClass: 'hide',
      gameClass: 'hide',
      cardsArrayLength: '',
      randomArray: [],
    }
  }

  formVisable() {
    if (this.state.formStatus !== true) {
      console.log(this.state.formStatus)
      this.setState({
        formStatus: true,
        formClass: 'display'
      })
    } else {
      console.log(this.state.formStatus)
      this.setState({
        formStatus: false,
        formClass: 'hide'
      })
    }
  }

  gameVisable() {
    if (this.state.gameStatus !== true) {
      console.log(this.state.gameStatus)
      this.setState({
        gameStatus: true,
        gameClass: 'displayGame'
      })
    } else {
      console.log(this.state.gameStatus)
      this.setState({
        gameStatus: false,
        gameClass: 'hide'
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
        <button onClick={() => this.formVisable()} >Dodaj</button>
        <button onClick={() => this.gameVisable()} >Zagraj</button>

        <AddForm status={this.state.formClass} />
        <GamePanel status={this.state.gameClass} randomArray={this.state.randomArray} />
      </div>
    );
  }
}

export default App;
