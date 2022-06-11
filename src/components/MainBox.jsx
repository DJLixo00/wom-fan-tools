import React, { Component } from 'react';

import DamageBox from './DamageBox';
import LeftSide from './LeftSide';
import RightSide from './RightSide';

class MainBox extends Component {
  state = {  
    selectionMode:false
  } 

  constructor(){
    super();
    this.handleLeftIBClick = this.handleLeftIBClick.bind(this)
    this.handleRightIBClick = this.handleRightIBClick.bind(this)

  }

  handleLeftIBClick() {
    // console.log("an inventory box in the leftside has been clicked")
    this.setState({selectionMode: !this.state.selectionMode})
  }

  handleRightIBClick() {
    console.log("an inventory box in the rightside has been clicked")
  }

  render() { 
    return(
      <div className="mainBox">
        <div id="topDiv" className="mainDiv">
          top
        </div>

        <LeftSide mainHandler = {this.handleLeftIBClick}/>

        <div id="rightDiv" className="mainDiv">
          <RightSide mainHandler = {this.handleRightIBClick} selectionMode={this.state.selectionMode}/>
        </div>

        <div id="bottomDiv" className="mainDiv">
          bottom
        </div>
      </div>
    )
  }
}

export default MainBox;
