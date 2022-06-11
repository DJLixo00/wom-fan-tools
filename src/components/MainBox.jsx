import React, { Component } from 'react';

import DamageBox from './DamageBox';
import LeftSide from './LeftSide';
import RightSide from './RightSide';

class MainBox extends Component {
  state = {  
    selectionMode:false,
    rightItemType:undefined,
    leftSideItems:[{},{},{},{},{}]
  } 

  constructor(){
    super();
    this.handleLeftIBClick = this.handleLeftIBClick.bind(this)
    this.handleRightIBClick = this.handleRightIBClick.bind(this)

  }

  handleLeftIBClick(id, shouldChange) {
    // console.log("an inventory box in the leftside has been clicked")
    this.setState({
      selectionMode: shouldChange ? !this.state.selectionMode : this.state.selectionMode,
      rightItemType: ["accessory","chestpiece","accessory","leggings","accessory"][id]
    })

    // console.log(id)
  }

  handleRightIBClick(item) {
    // console.log("an inventory box in the rightside has been clicked")
    this.setState({
      leftSideItems:this.state.leftSideItems
    })
    console.log(item)
  }

  render() { 
    return(
      <div className="mainBox">
        <div id="topDiv" className="mainDiv">
          top
        </div>

        <LeftSide mainHandler = {this.handleLeftIBClick}/>

        <div id="rightDiv" className="mainDiv">
          <RightSide 
            mainHandler = {this.handleRightIBClick} 
            selectionMode={this.state.selectionMode} 
            data = {this.props.data} 
            itemType = {this.state.rightItemType}
          />
        </div>

        <div id="bottomDiv" className="mainDiv">
          bottom
        </div>
      </div>
    )
  }
}

export default MainBox;
