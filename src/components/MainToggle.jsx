import React, { Component } from "react";

class Main extends Component {
    constructor() {
        super();
        this.state = {
            opened: false,
            disActive: null,
            loadClass: null,
            noCardsInfo: null
        };
        this.mainToggle = this.mainToggle.bind(this);
    }

    mainToggle() {
        const { opened } = this.state;

            this.setState({
                opened: !opened,
                disActive: 'disactive-button',
            });

            
            if (localStorage.getItem('cards') == null) {

                this.setState({
                    noCardsInfo: 'no-cards',
                })
                setTimeout(() => {
                    this.setState({
                        noCardsInfo: null,
                        opened: null,
                        disActive: null,
                    })
                }, 1000)
                
            } else {

                if (opened === true) {
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
    }

    render() {
        let { title, children } = this.props;
        const { opened, noCardsInfo } = this.state;

        if (opened) {
            title = 'Wróć';
        }

        return (
            <div className="main__gamePanel">
                <div className={this.state.loadClass}></div>
                <button className={`main__gamePanel--gameButton ${this.state.disActive}`} onClick={this.mainToggle}>
                    {title}
                </button>

                {opened && (
                    localStorage.getItem('cards') ? (
                        <div className="gamePanel">
                            {children}
                        </div>
                    ) 
                    : 
                    ( 
                    noCardsInfo &&
                        (
                            <div className={noCardsInfo}>
                                <h1 className="no-cards--text"> Brak fiszek! </h1>
                            </div>
                        )
                    )
                )}
            </div>
        );
    }
}

export default Main;