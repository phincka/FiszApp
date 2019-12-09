import React, { Component } from 'react';

class Card extends Component{
    render() {
        return (
             <div className="card front">
                 <div className="card front card-active">
                     <h1>{this.props.front}</h1>
                 </div>
                <div className="card back">
                    <h1>{this.props.back}</h1>
                </div>
             </div>
        );
    }
}

export default Card