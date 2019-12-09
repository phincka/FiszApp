import React, { Component } from 'react';

class AddForm extends Component {
    constructor(){
        super()
        this.state = {
            front: '',
            back: '',
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }
    onChange(e){
        const targetName = e.target.name;
        if ( targetName == 'front') {
            this.setState({
                [targetName]: e.target.value,
            })
        }else{
            this.setState({
                [targetName]: e.target.value,
            })
        }
    }
    onSubmit(){
        
        if(localStorage.getItem('cards') !== null){
            
            //! Return localStorage Cards item if exist
            console.log('Item "cards" exist')
            console.log(localStorage.getItem('cards'))
            
            //! Parse localStorage to JS Object && cerate newElement from Component State
            const retrievedObject = JSON.parse(localStorage.getItem('cards'))
            const newElement = {
                front: this.state.front,
                back: this.state.back
            }

            //! Transform object to array && add newElement to array && transform array to object
            const cardsArray = Object.keys(retrievedObject).map(i => retrievedObject[i])
            cardsArray.push(newElement)
            
            const cardsObject = Object.assign({}, cardsArray)
            localStorage.setItem('cards', JSON.stringify(cardsObject))
            
            console.log(cardsObject)
            console.log(localStorage.getItem('cards'))

        }else{
            console.log('Item "cards" not exist')
            //! Create localStorage item 'cards' with cardObject
            
            const cardObject = [
                {
                    front: this.state.front,
                    back: this.state.back
                }
            ]
            localStorage.setItem('cards', JSON.stringify(cardObject))
            console.log(cardObject)
        }
        

    }
    reset(){
        //! Delete 'cards' from localStorage
        localStorage.removeItem('cards')
        console.log('Cards was deleted.')
    }
    render() {
        return (
            <div className={this.props.status}>
                <input type="text" name="front" placeholder="awers" onChange={this.onChange} /> <br />
                <input type="text" name="back" placeholder="rewers" onChange={this.onChange} /> <br /><br />
                
                <input onClick={this.onSubmit} type="submit" value="Dodaj" />
                <input onClick={this.reset} type="submit" value="Usuń"/>
            </div>
        );
    }
}


export default AddForm;