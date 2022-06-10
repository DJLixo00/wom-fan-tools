import React, { Component } from 'react';

import DamageBox from './DamageBox';
import LeftSide from './LeftSide';
import RightSide from './RightSide';

class MainBox extends Component {
  state = {  

  } 

  constructor(){
    super();
    this.handleInvBoxClick = this.handleInvBoxClick.bind(this)
  }

  handleInvBoxClick() {

  }

  render() { 
    return(
      <div className="mainBox">
        <div id="topDiv" className="mainDiv">
          top
        </div>

        <LeftSide/>

        <div id="rightDiv" className="mainDiv">
          <RightSide/>
        </div>

        <div id="bottomDiv" className="mainDiv">
          bottom
        </div>
      </div>
    )
  }
}

export default MainBox;
