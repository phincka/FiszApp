import React, { Component } from 'react';
import Card from './card';

class GamePanel extends Component {
    constructor(){
        super()
        this.state = {
            endPoint: false,
            numOfGenerate: 0,
            points: 0,
            frontSite: '',
            backSite: '',
        }
    }
    getRadom(){
        const retrievedObject = JSON.parse(localStorage.getItem('cards'))
        const cardsArray = Object.keys(retrievedObject).map(i => retrievedObject[i])
        const randomNumTab = this.props.randomArray
        
        const { numOfGenerate } = this.state
        
        if (numOfGenerate == cardsArray.length) {
            console.log('Koniec rekordów')
            this.setState({endPoint: true})

        }else{
            console.table(cardsArray[randomNumTab[numOfGenerate]])

            this.setState({
                numOfGenerate: numOfGenerate + 1,
                frontSite: cardsArray[randomNumTab[numOfGenerate]].front,
                backSite: cardsArray[randomNumTab[numOfGenerate]].back,
            })


            console.log(`Losowy numer: ${randomNumTab}`)
            console.log(`Id kliknięcia: ${numOfGenerate}`)
        }
        
        
    }
    addPoint(){
        if (this.state.endPoint == false) {
            this.setState({
                points: this.state.points +1
            })
        }else{
            //! If endpoint is true
        }
    }
    render() {
        return (
            <div className={this.props.status}>
                <h4>Punkty: {this.state.points}</h4>

                <Card front={this.state.frontSite} back={this.state.backSite}/>

                <button onClick={() => { this.getRadom(); this.addPoint()}}>Tak</button>
                <button onClick={() => this.getRadom()}>Nie</button>
            </div>
        );
    }
}


export default GamePanel