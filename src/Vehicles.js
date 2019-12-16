import React, { Component } from "react";

class Card extends Component {
    componentDidMount(){
        console.log('mount')
    }
    render() {
        return (
            <div> Vehicles Child Component </div>
        );
    }
}

export default Card;