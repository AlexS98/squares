import React from 'react';
import ReactDOM from 'react-dom';
import Square from './Square'

class Board extends React.Component{
    state={
        squares: [
            {
                number: 1,
                xPos: 150,
                yPos: 150,
                isActive: false
            },
            {
                number: 2,
                xPos: 350,
                yPos: 350,
                isActive: false
            }
        ],

    }

    render(){
        return (
            <div>
                <Square info={this.state.squares[0]} />
            </div>
        );
    }
}

export default Board;