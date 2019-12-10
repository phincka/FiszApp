import React, { Component } from 'react';

class Card extends Component{
    constructor(){
        super()
        this.state = {
            cardStatus: 0,
            cardStyle: '',
            allCardStyle: '',
        }
    }
    cardFlip(){
        console.log('test');
        const { cardStatus, cardStyle } = this.state
        
        if(cardStatus == 0){
            this.setState({
                cardStatus: 1,
                cardStyle: 'is-switched',
                allCardStyle: 'is-active',

            })
        }else{
            this.setState({
                cardStatus: 0,
                cardStyle: '',
                allCardStyle: '',

            })
        }
        console.log(cardStatus)
        console.log(cardStyle)
    }
    render() {
        return (
                <div className={`card js-card ${this.state.cardStyle}`} onClick={() => this.cardFlip()} > 
                    <div className="card__wrapper" >
                    <div className="card__side is-active">
                        <h1>{this.props.front}</h1>
                    </div>
                    <div className="card__side card__side--back">
                        <h2>{this.props.back}</h2>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card