
import React, { Component } from "react";
import Main from "./components/MainToggle";
import Header from "./components/header";
import GamePanel from "./components/gamePanel";

import './css/main.scss';

class App extends Component {
  constructor() {
    super()
    this.state = {
      cardsArrayLength: '',
      randomArray: [],
    }
  }
                //! Dodać plansze zakończenia
  render() {
    return (
      <div className="App">
        <Header />
          <main className="main">
            <Main title="Zagraj">
              <GamePanel />
            </Main>
          </main>
      </div>
      
    );
  }
}

export default App;
