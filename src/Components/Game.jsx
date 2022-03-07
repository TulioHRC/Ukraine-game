import React, { Component } from 'react'

class Game extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            rest: [this.props.image1,this.props.image2,this.props.image3,this.props.image4],
            gameOver: 0
        }
    }

    selectOneOpponent = () => {
        let random = Math.floor(Math.random() * this.state.rest.length)
        return this.state.rest[random]
    }
    

    render() {
        return (
            <div className='game'>
                <img src={'Ukranian.png'} alt="Ukranian" />
                <img src={'gun.png'} alt="Gun" />
                <img src={'peaceFlag.png'} alt="Peace Flag" />
                <img src={this.selectOneOpponent()} alt="Opponent" />
            </div>
        )
    }
}

export default Game