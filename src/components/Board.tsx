import React from 'react';
import Square from './Square'
import { SquareProps } from './Square'

interface BoardState {
    squares: SquareProps[]
}

class Board extends React.Component<{}, BoardState>{
    state: BoardState = {
        squares: [
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
        ]
    };

    createSquares = () => {
        let squares: any[] = [];
        this.state.squares.forEach(e => {
            squares.push(<Square xPos={e.xPos} yPos={e.yPos} name={e.name} color={e.color} />)
        });
        return squares;
    }

    onDown = () => {
        const squares: SquareProps[] = this.state.squares.slice();
        squares.forEach(e => {

        });
    }

    onMove = () => {
        const squares: SquareProps[] = this.state.squares.slice();
        this.setState({squares: squares} as BoardState);
    }

    onUp = () => {
        const squares: SquareProps[] = this.state.squares.slice();
        this.setState({squares: squares} as BoardState);
    }

    render() {
        return (
            <div onMouseDown={this.onDown}
                onMouseMove={this.onMove}
                onMouseUp={this.onUp} >
                {this.createSquares()}
            </div>
        );
    }
}

export default Board;