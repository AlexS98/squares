import React from 'react';
import Square from './Square';
import { SquareProps } from './Square';

interface BoardState {
    squares: SquareProps[],
    lastCoords: MousePosition
}

export interface MousePosition {
    X: number;
    Y: number;
}

class Board extends React.Component<{}, BoardState>{
    state: BoardState = {
        squares: [
            {
                xPos: 125,
                yPos: 125,
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
            },
            {
                xPos: 0,
                yPos: 0,
                name: "square3",
                color: "blue",
                isActive: false
            }
        ],
        lastCoords: {
            X: 0, 
            Y: 0
        }
    };

    setSquares = () => {
        const squares: SquareProps[] = this.state.squares.slice();
        squares.forEach(e => {
            const el: any = document.getElementById(e.name);
            if (el) {
                el.style.left = e.xPos + 'px';
                el.style.top = e.yPos + 'px';
            }
        });
    }

    componentDidMount = () => {
        this.setSquares();
    }

    componentDidUpdate = () => {
        this.setSquares();
    }

    createSquares = () => {
        let squares: any[] = [];
        this.state.squares.forEach(e => {
            squares.push(
                <Square key={e.name} xPos={e.xPos} yPos={e.yPos} name={e.name}
                    color={e.color} isActive={e.isActive} />
            );
        });
        return squares;
    }

    onDown = (e: { clientX: number, clientY: number }) => {
        const squares: SquareProps[] = this.state.squares.slice();
        const mouse: MousePosition = { X: e.clientX, Y: e.clientY };
        squares.forEach(el => {
            el.isActive = !el.isActive &&
                mouse.X >= el.xPos &&
                mouse.X <= el.xPos + 108 &&
                mouse.Y >= el.yPos &&
                mouse.Y <= el.yPos + 108;
        });
        this.setState({
            squares: squares,
            lastCoords: mouse
        } as BoardState)
    }

    onMove = (e: { clientX: number, clientY: number }) => {
        const squares: SquareProps[] = this.state.squares.slice();
        const mouse: MousePosition = { X: e.clientX, Y: e.clientY };
        //console.log("x:" + e.clientX + " - y:" + e.clientY);
        squares.forEach(el => {
            if (el.isActive) {
                el.xPos += mouse.X - this.state.lastCoords.X;
                el.yPos += mouse.Y - this.state.lastCoords.Y;
            }
        });
        this.setState({
            squares: squares,
            lastCoords: mouse
        } as BoardState);
    }

    onUp = () => {
        const squares: SquareProps[] = this.state.squares.slice();
        squares.forEach(el => {
            el.isActive = false;
        });
        this.setState({
            squares: squares,
            lastCoords: this.state.lastCoords
        } as BoardState);
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