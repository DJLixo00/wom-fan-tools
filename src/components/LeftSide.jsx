import React, { Component } from 'react';
import InventoryBox from './InventoryBox';
// import logo from "../logo.svg";
import iconPow from "../images/others/iconPow.png";
import iconDef from "../images/others/iconDef.png";
import iconAgi from "../images/others/iconAgi.png";
import iconStr from "../images/others/iconStr.png";
import iconCas from "../images/others/iconCas.png";
import iconMsp from "../images/others/iconMsp.png";
import iconSze from "../images/others/iconSze.png";
import iconKnb from "../images/others/iconKnb.png";


class LeftSide extends Component {
    state = {  
        boxSelected:0,
        pervBoxSel:0,
    } 

    constructor(){
        super();
        this.assignClicked = this.assignClicked.bind(this)
    }

    addArrayHelper(arr1, arr2) {
      /**
       * Helper function that returns the sum of two arrays like so:
       *  let a = [1,2]
       *  let b = [3,4]
       *  addArrayHelper(a,b) would return [4,6]
       *  a and b must be the same length
      */
      if (arr1.length !== arr2.length) {
        console.error("arr1 arr2 length mismatch, check your input to addArrayHelper")
      }

      let result = []
      for (let i = 0; i < arr1.length; i++) {
        result.push(arr1[i] + arr2[i])
      }
      return result
    }

    calculateGearStats(){
      /**
       * returns JSX that displays the stats of the item equipped.
       * loop starts at 1 because 0 means not in selection Mode
       */

      let result = [0,0,0,0,0,0,0,0]
      for (let i = 1; i < this.props.equipped.length; i++) {
        let slot = this.props.equipped[i]["stats"]
        if (typeof slot === 'undefined') {
          continue;
        } 
        let arr1 = this.props.equipped[i]["stats"]
        let arr2 = result
        result = this.addArrayHelper(arr1,arr2)
      }
      
      return (
      <div className='statDisplay'>
        <div className='statRow'>
          <div className='statP statPowP'><img src={iconPow}/>Power: {result[0]}</div>
          <div className='statP statDefP'><img src={iconDef}/>Defense: {result[1]}</div>
        </div>

        <div className='statRow'>
          <div className='statP statAgiP'><img src={iconAgi}/>Agility: {result[2]}</div>
          <div className='statP statStrP'><img src={iconStr}/>Strength: {result[3]}</div>
        </div>
        
        <div className='statRow'>
          <div className='statP statCasP'><img src={iconCas}/>Casting Speed: {result[4]}</div>
          <div className='statP statMspP'><img src={iconMsp}/>Magic Speed: {result[5]}</div>
        </div>

        <div className='statRow'>
          <div className='statP statSzeP'><img src={iconSze}/>Magic Size: {result[6]}</div>
          <div className='statP statKnbP'><img src={iconKnb}/>Knockback: {result[7]}</div>
        </div>
      </div>
      )
    }
    
    assignClicked(id) {
        let boxId = id === this.state.boxSelected ? 0 : id; //this line for cancel selection 
        this.setState({
            pervBoxSel:this.state.boxSelected,
            boxSelected:boxId
        },
            ()=>{
                // console.log(this.state.boxSelected)
                let shouldChange = this.state.boxSelected === 0 || this.state.pervBoxSel === 0
                  this.props.mainHandler(boxId, shouldChange);
            }
        )
        //stuff put here may run before state updates because setState is async
    }

    render() { 
        let equipped = this.props.equipped
        return (
        <div id="leftDiv" className="mainDiv">
          <div className='leftRowContainer'>
            <div className='leftRow'>
              <InventoryBox 
                boxId = {1} 
                clicked = {this.assignClicked} 
                boxSelected = {this.state.boxSelected} 
                type = "equip" 
                text = {equipped[1]["name"]}
              />

              <InventoryBox 
                boxId = {2} 
                clicked = {this.assignClicked} 
                boxSelected = {this.state.boxSelected} 
                type = "equip"
                text = {equipped[2]["name"]}
              />
            </div>

            <div className='leftRow'>
              <InventoryBox 
                boxId = {3} 
                clicked = {this.assignClicked} 
                boxSelected = {this.state.boxSelected} 
                type = "equip"
                text = {equipped[3]["name"]}
              />

              <InventoryBox 
                boxId = {4} 
                clicked = {this.assignClicked} 
                boxSelected = {this.state.boxSelected} 
                type = "equip"
                text = {equipped[4]["name"]}
              />
            </div>

            <div className='leftRow'>
              <InventoryBox 
                boxId = {5} 
                clicked = {this.assignClicked} 
                boxSelected = {this.state.boxSelected} 
                type = "equip"
                text = {equipped[5]["name"]}
              />
              <InventoryBox type = "invisible"/>

            </div>

            <div className='leftRow'>
              {this.calculateGearStats()}
            </div>

          </div>
        </div>
        );
    }
}
 
export default LeftSide;