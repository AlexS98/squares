import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './App.css';

class Square extends React.Component {
    state = {
        number: 0,
        xPos: 0,
        yPos: 0,
        isActive: false
    }

    onDown = () => {
        this.setState({
            number: this.state.number + 1,
            isActive: !this.state.isActive
        })
    }



    render() {
        return(
            <div onClick={this.onDown} className={"square" + (this.state.isActive? " active" : "" )}>
                {this.state.number}
            </div>
        );
    };
};


export default Square;