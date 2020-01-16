import React, { Component } from "react";
import Header from "./components/header";
import AddForm from './components/addForm'
import GamePanel from "./components/gamePanel";
import Game from './components/game'

import { BrowserRouter as Router, Route, } from 'react-router-dom';

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
                <Router>
                    <Header />
                    <Footer />

                    <div className="routers">
                        <Route exact path="/" component={Game} />
                        <Route path="/add-card" component={AddForm} />
                        <Route path="/game" component={GamePanel} />
                    </div>
                </Router>
            </div>

        );
    }
}

export default App;
