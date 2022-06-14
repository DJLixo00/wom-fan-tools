import React, { Component } from 'react';

class StatusBox extends Component {
    state = {  } 
    render() { 
        return (
            <div className='statusBox'>
                <button onClick={()=>this.props.handleDelete()}>X</button>
                <div>{this.props.text}</div>
            </div>
        );
    }
}
 
export default StatusBox;