import React from 'react';
import Square from './Square'
import { SquareProps } from './Square'

class Board extends React.Component<{}, SquareProps[]>{
    state:SquareProps[] = [
            {
                xPos: 150,
                yPos: 150,
                name: "square1",
                color: "red",
                isActive: false
            },
            {
                xPos: 350,
                yPos: 350,
                name: "square2",
                color: "green",
                isActive: false
            }
        ];

    createSquares = () => {
        let squares:any[] = [];
        this.state.forEach(e => {
            squares.push(<Square xPos={e.xPos} yPos={e.yPos} name={e.name} color={e.color} />)
        });
        return squares;
    }

    onDown = () => {
        let squares:SquareProps[] = this.state.slice();
        
    }

    onMove = () => {
        let squares:SquareProps[] = this.state.slice();
        this.setState({
        })
    }

    render(){
        return (
            <div
                onMouseDown={() => this.setState({})} 
                onMouseMove={this.onMove} 
                onMouseUp={() => this.setState({})} >
                {this.createSquares()}
            </div>
        );
    }
}

export default Board;