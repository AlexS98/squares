import * as React from 'react';
import * as ReactDOM from 'react-dom'; 

class Square extends React.Component {
    constructor(props){
        super(props);
    }
    state = {
        number: 0,
        xPos: 0,
        yPos: 0,
        isActive: false
    }

    onMove = () => {
        this.setState({
            number: this.state.number + 1,
        })
    }



    render() {
        return(
            <div onMouseDown={() => this.setState({isActive: true})} 
                 onMouseMove={this.onMove} 
                 onMouseUp={() => this.setState({isActive: false})} 
                 className={"square" + (this.state.isActive? " active" : "" )}>
                {this.state.number}
            </div>
        );
    };
};


export default Square;