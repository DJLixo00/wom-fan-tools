import React, { Component } from 'react';

import DamageBox from './DamageBox';
import LeftSide from './LeftSide';
import RightSide from './RightSide';

class MainBox extends Component {
  state = {  
    selectionMode:false,
    damageCalMode:true,
    leftBoxId:0,
    rightItemType:undefined,
    leftSideItems:[{},{},{},{},{},{}]
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
      leftBoxId:id,
      //note: index 0 is "chestpiece", 
      //but that's just there to keep it from crashing, 0 means none selected
      rightItemType: ["chestpiece","accessory","chestpiece","accessory","leggings","accessory"][id]
    })

    // console.log(id)
  }

  handleRightIBClick(item) {
    // console.log("an inventory box in the rightside has been clicked")
    let newLeftSideItems = this.state.leftSideItems
    newLeftSideItems[this.state.leftBoxId] = item
    this.setState({
      leftSideItems:newLeftSideItems
    })
  }

  render() {
    // console.log(this.props.magicData) 
    return(
      <div className="mainBox">
        <div id="topDiv" className="mainDiv">
          top
        </div>

        <LeftSide 
          mainHandler = {this.handleLeftIBClick} 
          equipped = {this.state.leftSideItems}
          damageCalMode = {this.state.damageCalMode}
          magicData = {this.props.magicData}
        />

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
