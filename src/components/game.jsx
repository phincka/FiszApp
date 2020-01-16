
import React, { Component } from "react";
import Main from "./MainToggle";


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
                <main className="main">
                    <Main title="Zagraj" />
                </main>
            </div>

        );
    }
}

export default App;
