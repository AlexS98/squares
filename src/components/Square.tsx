import React from 'react';

export interface SquareProps {
    xPos: number;
    yPos: number;
    name: string;
    color?: string;
    isActive?: boolean;
}

const Square: React.FC<SquareProps> = (props) => {
    return (
        <div id={props.name}
            style={{ backgroundColor: props.color }}
            className={"square"}>
        </div>
    )
};

export default Square;