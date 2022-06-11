import React, { Component } from 'react';
import InventoryBox from './InventoryBox';

class LeftSide extends Component {
    state = {  
        boxSelected:-1,
        pervBoxSel:-1,
    } 

    constructor(){
        super();
        this.assignClicked = this.assignClicked.bind(this)
    }
    
    assignClicked(id) {
        let boxId = id == this.state.boxSelected ? -1 : id;        
        this.setState({
            pervBoxSel:this.state.boxSelected,
            boxSelected:boxId
        },
            ()=>{
                // console.log(this.state.boxSelected)
                let shouldChange = this.state.boxSelected == -1 || this.state.pervBoxSel == -1
                  this.props.mainHandler(boxId, shouldChange);
            }
        )
        //stuff put here may run before state updates because setState is async
    }

    render() { 
        return (
        <div id="leftDiv" className="mainDiv">
          <div className='leftRowContainer'>
            <div className='leftRow'>
              <InventoryBox boxId = {0} clicked = {this.assignClicked} boxSelected = {this.state.boxSelected} type = "equip"/>
              <InventoryBox boxId = {1} clicked = {this.assignClicked} boxSelected = {this.state.boxSelected} type = "equip"/>
            </div>

            <div className='leftRow'>
              <InventoryBox boxId = {2} clicked = {this.assignClicked} boxSelected = {this.state.boxSelected} type = "equip"/>
              <InventoryBox boxId = {3} clicked = {this.assignClicked} boxSelected = {this.state.boxSelected} type = "equip"/>
            </div>

            <div className='leftRow'>
              <InventoryBox boxId = {4} clicked = {this.assignClicked} boxSelected = {this.state.boxSelected} type = "equip"/>
              <InventoryBox type = "invisible"/>

            </div>

            <div className='leftRow'>
              <div className='statDisplay'>
                {this.state.boxSelected}
              </div>
            </div>

          </div>
        </div>
        );
    }
}
 
export default LeftSide;