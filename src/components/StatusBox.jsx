import React, { Component } from 'react';

class StatusBox extends Component {
    state = {  } 

    render() { 
        return (
            <button 
                className = {this.props.selected ? 'statusBox statusBoxSelected': 'statusBox'}
                onClick = {()=>{this.props.clicked(this.props.status)}}
            >
                <div>{this.props.text}</div>
            </button>
        );
    }
}
 
export default StatusBox;