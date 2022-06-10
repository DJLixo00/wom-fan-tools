import React, { Component } from 'react';

import DamageBox from './DamageBox';
import LeftSide from './LeftSide';

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
          
          <div className='rightRowContiner selectionContiner' style={{display:'none'}}>
            hide this div
          </div>

          <div className='rightRowContiner damageBoxContiner'>
            {/* will insert DamageBox here */}
            {/* <DamageBox/> */}
            <div className='rightRow'>here's a row</div>
          </div>

        </div>

        <div id="bottomDiv" className="mainDiv">
          bottom
        </div>
      </div>
    )
  }
}

export default MainBox;
