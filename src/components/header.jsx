import React, { Component } from 'react';
import AddForm from './addForm';

class Header extends Component {
    constructor(){
        super()
        this.state = {
            formStatus: false,
            formClass: 'hide',
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

    render() {
        return (
             <header className="header">
                <h2 className="header--title">EnFIsh</h2>
                <button className="header--formButton" onClick={() => this.formVisable()} >Dodaj</button>

                <AddForm status={this.state.formClass} />
             </header>
        );
    }
}

export default Header