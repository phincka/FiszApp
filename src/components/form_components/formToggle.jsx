import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import AddForm from "./addForm";

class FormToggle extends Component {
    constructor() {
        super();
        this.state = {
            path: '/add-card',
            disActive: '',
            loadClass: null,
        };
        this.formToggle = this.formToggle.bind(this);
    }
    
    formToggle() {
        const { path } = this.state;

        if( path === '/add-card' ){
            this.setState({
                path: '/',
                disActive: '',
                loadClass: 'load',
            });
            setTimeout(() => {
                this.setState({
                    loadClass: null,
                })
            }, 500)

        }else{
            this.setState({
                path: '/add-card',
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
        const { path } = this.state;

        if (path === '/') {
            title = 'Wróć';
        }
        
        console.log(path)
        return (
            <div className="header__form">
                <div className={this.state.loadClass}></div>
                <Router>
                    <Route path="/add-card" component={AddForm}/>
                    <Link to={ path } className={`header__form--formButton ${this.state.disActive}`} onClick={this.formToggle}>{ title }</Link>
                </Router>
            </div>
        );
    }
}

export default FormToggle;