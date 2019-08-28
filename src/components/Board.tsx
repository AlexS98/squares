import React from 'react';
import Square from './Square';
import { SquareProps } from './Square';

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
                xPos: 250,
                yPos: 250,
                name: "square2",
                color: "green",
                isActive: false
            }
        ]
    };

    componentDidMount = () => {
        const squares: SquareProps[] = this.state.squares.slice();
        squares.forEach(e => {
            const el:any = document.getElementById(e.name);
            if (el) {
                el.style.left = e.xPos + 'px';
                el.style.top = e.yPos + 'px';
            }
        });
    }

    createSquares = () => {
        let squares: any[] = [];
        this.state.squares.forEach(e => {
            squares.push(<Square key={e.name} xPos={e.xPos} yPos={e.yPos} name={e.name} color={e.color} />)
        });
        return squares;
    }

    onDown = () => {
        const squares: SquareProps[] = this.state.squares.slice();
        squares.forEach(e => {

        });
    }

    onMove = (e: { screenX: number, screenY: number }) => {
        const squares: SquareProps[] = this.state.squares.slice();
        console.log("x:" + e.screenX + " - y:" + e.screenY);
        this.setState({ squares: squares } as BoardState);
    }

    onUp = () => {
        const squares: SquareProps[] = this.state.squares.slice();
        this.setState({ squares: squares } as BoardState);
    }

    render() {
        return (
            <div className={"board"}
                onMouseDown={this.onDown}
                onMouseMove={this.onMove}
                onMouseUp={this.onUp} >
                {this.createSquares()}
            </div>
        );
    }
}

export default Board;