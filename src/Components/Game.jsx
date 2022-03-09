import React, { Component } from 'react'

class Game extends Component {
    constructor(props) {
        super(props);

        let restList = [this.props.image1,this.props.image2,this.props.image3,this.props.image4]
        this.shuffleArray(restList)
        
        this.state = {
            rest: restList,
            pontuation: 0
        }
    }

    shuffleArray = (array) => { // Sort randomly the array 
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    change = (type) => {
        let prevOpponent = this.state.rest[0]
        let points // Points for the choice
        let newRest = this.state.rest
        newRest.shift()

        if(prevOpponent.includes('putin') || prevOpponent.includes('azov')){ // Criminal opponents
            points = type==='shoot' ? 1 : -1
        } else { // Good opponents
            points = type==='shoot' ? -2 : 1
        }

        this.setState({
            rest: newRest,
            pontuation: this.state.pontuation + points
        })
    }

    render() {
        const { rest, pontuation } = this.state

        return rest.length > 0 ? (
            <div className='game'>
                <img align='center' src={'Ukranian.png'} alt="Ukranian" />

                <div className='game-options'>
                    <img onClick={() => this.change('shoot')} align='center' src={'gun.png'} alt="Gun" />
                    <br />
                    <img onClick={() => this.change('peace')} align='center' src={'peaceFlag.png'} alt="Peace Flag" />                       
                </div>

                <img align='center' src={rest[0]} alt="Opponent" />
            </div>
        ) : (
            <div className='game'>
                <h1>
                    {
                        pontuation === 4 ? 'Congratulations, you saved Humanity and the World!' : pontuation < 0 ? 'Why are you a terrible person?' : 'You did not saved humanity!'
                    }
                </h1>
            </div>
        )
    }
}

export default Game