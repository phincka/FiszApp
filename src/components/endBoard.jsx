import React, { Component } from 'react';

class EndBoard extends Component {
    render() {
        let { points, numOfCards } = this.props
        return (
            <div>
                <h1 className="endBoard--title">Koniec!</h1>
                    <p className="endBoard--result">Uzyskano:</p>
                    <h3 className="endBoard--points">{`${points} / ${numOfCards} pkt.`}</h3>
                    <p className="endBoard--result">Aby kontynuować wróć do strony głównej.</p>
            </div>
        );
    }
}

export default EndBoard