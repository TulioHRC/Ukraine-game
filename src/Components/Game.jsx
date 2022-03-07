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
                <img align='center' src={'Ukranian.png'} alt="Ukranian" />

                <div className='game-options'>
                    <img align='center' src={'gun.png'} alt="Gun" />
                    <br />
                    <img align='center' src={'peaceFlag.png'} alt="Peace Flag" />                       
                </div>

                <img align='center' src={this.selectOneOpponent()} alt="Opponent" />
            </div>
        )
    }
}

export default Game