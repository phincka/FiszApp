import React, { Component } from 'react';
import AddedInfo from './addedInfo';
import DeletedInfo from './deletedInfo';

class AddForm extends Component {
    constructor(){
        super()
        this.state = {
            front: '',
            back: '',
            added: false,
            deleted: false,
            loadClass: null
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.AddbyKey = this.AddbyKey.bind(this);
        this.reset = this.reset.bind(this);

    }
    componentDidMount(){
        console.log('Loading!!')
        this.setState({ loadClass: 'load' });

        setTimeout(() => {
            this.setState({
                loadClass: null,
            })
        }, 500)
    }
    
    onChange(e){
        const targetName = e.target.name;
        if ( targetName === 'front') {
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
            if (localStorage.getItem('cards') !== null) {

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

                console.table(cardsObject)
                console.log(localStorage.getItem('cards'))

            } else {
                console.log('Item "cards" not exist')
                //! Create localStorage item 'cards' with cardObject

                const cardObject = [
                    {
                        front: this.state.front,
                        back: this.state.back
                    }
                ]
                localStorage.setItem('cards', JSON.stringify(cardObject))
            }
            this.setState({
                front: '',
                back: '',
                added: true
            })
            
            //! Time after wich added info is unmouted
            setTimeout(() => {
                this.setState({
                    added: false,
                })
            }, 1000)
    }
    AddbyKey(e){
        //! Checks for a Enter has been pressed
        const submit = e.key === 'Enter' ? this.onSubmit() : null
        return submit
    }
    reset(){
        //! Delete 'cards' from localStorage
        localStorage.removeItem('cards')
        console.log('Cards was deleted.')
       
        this.setState({
            deleted: true
        })
        setTimeout(() => {
            this.setState({
                deleted: false,
            })
        }, 1000)
    }


    render() {
        return (
            <div className="addForm">
                <div className={`${this.state.loadClass}`}></div>
                <div className="addForm__inputs">
                    <input className="addForm__inputs--input" type="text" name="front" placeholder="Awers" value={this.state.front} onChange={this.onChange} onKeyPress={this.AddbyKey} />
                    <input className="addForm__inputs--input" type="text" name="back" placeholder="Rewers" value={this.state.back} onChange={this.onChange} onKeyPress={this.AddbyKey} />
                    <input className="addForm__inputs--input--add" onClick={this.onSubmit}  type="submit" value="Dodaj" />

                    {this.state.added && (
                        <AddedInfo />
                    )}
                </div>
                
                <input className="addForm--delete" onDoubleClick={this.reset} type="submit" value="Usuń wszystkie"/>
                {this.state.deleted && (
                    <DeletedInfo />
                )}
            </div>
        );
    }
}


export default AddForm;