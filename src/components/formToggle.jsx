import React, { Component } from "react";
import { Link } from 'react-router-dom';

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
                <Link to={ path } className={`header__form--formButton ${this.state.disActive}`} onClick={this.formToggle}>{ title }</Link>
            </div>
        );
    }
}

export default FormToggle;