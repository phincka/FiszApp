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
        const { cardStatus} = this.state

        if(cardStatus === 0){
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

        setTimeout(() => {
            this.setState({
                cardStatus: 0,
                cardStyle: '',
                allCardStyle: '',
            })
        }, 900)
    }
    
    render() {
        let { front, back } =this.props
        const { cardStyle } = this.state

        return (
            <div className={`card js-card gamePanel__card ${cardStyle}`} onClick={() => this.cardFlip()} > 
                    <div className="card__wrapper" >
                    <div className="card__side is-active">
                        <h2 className="card__side--title">{front}</h2>
                    </div>
                    <div className="card__side card__side--back">
                        <h2 className="card__side--title">{back}</h2>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card