import React, { Component } from "react";
import { Link } from "react-router-dom";

class Main extends Component {
    constructor() {
        super();
        this.state = {
            path: '/game',
            disActive: '',
            loadClass: null,
            noCardsInfo: null
        };
        this.mainToggle = this.mainToggle.bind(this);
    }

    mainToggle() {
        this.setState({ disActive: 'disactive-button',})

            if (localStorage.getItem('cards') == null) {

                this.setState({
                    noCardsInfo: 'no-cards',
                })
                setTimeout(() => {
                    this.setState({
                        noCardsInfo: null,
                        path: null,
                        disActive: null,
                    })
                }, 1000)
                
            } else {
                this.setState({
                    disActive: '',
                    loadClass: 'load',
                });
                setTimeout(() => {
                    this.setState({
                        loadClass: null,
                    })
                }, 500)
            }
    }

    render() {
        let { title } = this.props;
        const { path, noCardsInfo } = this.state;


        return (
            <div className="main__gamePanel">
                <div className={this.state.loadClass}></div>
                <Link to={ path } className="main__gamePanel--gameButton" onClick={this.formToggle}>{ title }</Link>
                {
                    noCardsInfo &&
                    (
                        <div className={noCardsInfo}>
                            <h1 className="no-cards--text"> Brak fiszek! </h1>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default Main;