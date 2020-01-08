import React, { Component } from 'react';
import AddForm from './addForm';
import FormToggle from "./formToggle";


class Header extends Component {
    constructor(){
        super()
        this.state = {
            formStatus: false,
            formClass: 'hide',
            formButtonValue: 'Dodaj',
        }
    }
    formVisable() {
        if (this.state.formStatus !== true) {
            console.log(this.state.formStatus)
            this.setState({
                formStatus: true,
                formClass: 'display',
                formButtonValue: 'Wróć',
            })
        } else {
            console.log(this.state.formStatus)
            this.setState({
                formStatus: false,
                formClass: 'hide',
                formButtonValue: 'Dodaj',
            })
        }
    }

    render() {
        return (
             <header className="header">
                <h2 className="header--title"><a href="http://localhost:3000/"> FiszApp </a></h2>
                    <FormToggle title="Dodaj">
                        <AddForm />
                    </FormToggle>
             </header>
        );
    }
}

export default Header