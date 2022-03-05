import React, { Component } from 'react'

class Game extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            gameOver: 0
        }
    }
    

    render() {
        return (
            <div className='game'>
                Game
            </div>
        )
    }
}

export default Game