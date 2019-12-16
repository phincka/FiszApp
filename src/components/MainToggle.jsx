import React, { Component } from "react";

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            opened: false,
            disActive: '',
        };

        this.mainToggle = this.mainToggle.bind(this);
    }

    mainToggle() {
        const { opened } = this.state;
        this.setState({
            opened: !opened,
            disActive: 'disactive-button',
        });
        //! WYŚWIETLANIE JEBANEJ STARTOWEJ PLANSZY :)
        if(opened === true){
            this.setState({
                disActive: '',
            });
        }
    }

    render() {
        let { title, children } = this.props;
        const { opened } = this.state;

        if (opened) {
            title = 'Wróć';
        }

        return (
            <div className="main__gamePanel">
                <button className={`main__gamePanel--gameButton ${this.state.disActive}`} onClick={this.mainToggle}>
                    {title}
                </button>
                {opened && (
                    <div>
                        {children}
                    </div>
                )}
            </div>
        );
    }
}

export default Main;