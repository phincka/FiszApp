import React, { Component } from "react";

class FormToggle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            opened: false,
            disActive: '',
        };

        this.formToggle = this.formToggle.bind(this);
    }
    formToggle() {
        const { opened } = this.state;
        this.setState({
            opened: !opened,
            disActive: 'disactive-button',
        });
        if (opened === true) {
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
            <div className="header__form">
                <button className={`header__form--formButton ${this.state.disActive}`} onClick={this.formToggle}>
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

export default FormToggle;