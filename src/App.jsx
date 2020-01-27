import React, { Component } from "react";
import Header from "./components/header";
import GamePanel from "./components/game_components/gamePanel";
import GameButton from './components/gameButton'


import './css/main.scss';
import Footer from "./components/footer";

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
                    <GameButton title="Zagraj">
                        <GamePanel />
                    </GameButton>
                    <Footer />
            </div>

        );
    }
}

export default App;
