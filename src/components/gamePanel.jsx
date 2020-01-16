import React, { Component } from 'react';
import Card from './card';
import EndBoard from './endBoard';

class GamePanel extends Component {
    constructor(){
        super()
        this.state = {
            endPoint: false,
            numOfGenerate: 0,
            points: 0,
            frontSite: null,
            backSite: null,
            randomNumArray: [],
            cardsCount: 0,
            loadClass: null,
            endPointClass: null,
        }
    }
    componentDidMount(){
        const { numOfGenerate, randomNumArray, cardsCount } = this.state

        console.log('Loading!!')
        this.setState({ loadClass: 'load' });

        setTimeout(() => {
            this.setState({
                loadClass: null,
            })
        }, 500)

        //! Geting Cards as object
        const retrievedObject = JSON.parse(localStorage.getItem('cards'))
        //! Convert Object to Array
        const cardsArray = Object.keys(retrievedObject).map(i => retrievedObject[i])

        const cardsLength = cardsArray.length


        //! Draw numbers
        let numersArray = []
        
        for (let i = 0; i < cardsLength; i++) {
            numersArray.push(i)
        }

        let randomArray = []

        for (let i = 0; i < numersArray.length; i++) {
            const randomNumber = Math.floor(Math.random() * numersArray.length)
            
            if (randomArray.indexOf(randomNumber) === -1 || randomArray.length > numersArray.length) {
                randomArray.push(randomNumber)
                console.log('Added')
                
            } else {
                console.log('Repeted')
                i -= 1
            }
        }
       
        this.setState({
            numOfGenerate: numOfGenerate + 1,
            frontSite: cardsArray[randomArray[numOfGenerate]].front,
            backSite: cardsArray[randomArray[numOfGenerate]].back,
            randomNumArray: randomArray,
            cardsCount: cardsLength
        })
        
        console.log('----------------------------------')
        console.log(`Ilość kart: ${cardsCount}`)
        console.log(`Losowy numer: ${randomNumArray}`)
        console.log(`Id kliknięcia: ${numOfGenerate}`)
        console.log('----------------------------------')
    }
    
    getRadom(){
        const { numOfGenerate, randomNumArray, cardsCount } = this.state

        const retrievedObject = JSON.parse(localStorage.getItem('cards'))
        const cardsArray = Object.keys(retrievedObject).map(i => retrievedObject[i])
        
        if (numOfGenerate !== cardsArray.length) {
            this.setState({
                numOfGenerate: numOfGenerate + 1,
                frontSite: cardsArray[randomNumArray[numOfGenerate]].front,
                backSite: cardsArray[randomNumArray[numOfGenerate]].back,
            })

            console.log('----------------------------------')
            console.log(`Ilość kart: ${cardsCount}`)
            console.log(`Losowy numer: ${randomNumArray}`)
            console.log(`Id kliknięcia: ${numOfGenerate}`)
            console.log('----------------------------------')
        }else{
            console.log('Koniec rekordów')
            this.setState({ 
                endPoint: true,
                endPointClass: 'endBoard'
            })
        }
        
        
    }
    addPoint(){
        if (this.state.endPoint === false) {
            this.setState({
                points: this.state.points +1
            })
        }else{
            //! If endpoint is true
        }
    }
    render() {
        const { loadClass, endPointClass, frontSite, backSite, endPoint, points, cardsCount } = this.state

            return (
                <div className={`gamePanel ${this.props.status}`}>
                    <div className={loadClass}></div>
                    <p className="gamePanel--points">Punkty <br /> <p class="points">{points}</p></p>

                    <Card front={frontSite} back={backSite} />

                    <p className="gamePanel--text">Umiesz?</p>
                    <div className="gamePanel__buttons">
                        <button className="gamePanel__buttons--button" onClick={() => { this.getRadom(); this.addPoint()}}>Tak</button>
                        <button className="gamePanel__buttons--button" onClick={() => this.getRadom()}>Nie</button>
                    </div>

                    {
                        endPoint && (
                            <div className={endPointClass}>
                                <EndBoard points={points} numOfCards={cardsCount}/>
                            </div>
                        )
                    }
                    <a href="/" className="disactive-button">Wróć</a>
                </div>
            );
    }
}


export default GamePanel