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
        selectedMagic:"Select Magic",
        spellType:0,
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
        <div className='statRow'><div className='statHP'>Total Health: {634+result[1]}</div></div>
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

    selectHelper(id) {
      let selOptions = document.getElementById(id).options
      let selIndex = selOptions.selectedIndex
      return [selOptions[selIndex].value, selIndex] 
    }

    handleMagicSel() {
      let valIndex = this.selectHelper("selectMagic")
      this.setState({selectedMagic:valIndex[0]},
        //call a function to communicate with Main here
        // ()=>console.log(this.state.selectedMagic)
      )
    }

    handleSpellSel() {
      let valIndex = this.selectHelper("selectSpell")
      this.setState({spellType:valIndex[1]},
        //call a function to communicate with Main here
      )
    }

    extractMagicName() {
      const magics = this.props.magicData.OBJ.magics
      let result = []
      for (let m in magics) {
        result.push(m.slice(0,1).toUpperCase() + m.slice(1,m.length))
      }
      return result
    }

    render() { 
      const STATUS = this.props.magicData.OBJ.status
      const MAGIC = this.extractMagicName()
      let equipped = this.props.equipped

      let blastAmount = [0,20,5,1][this.state.spellType]
      let shouldShow = {
        magicSel: "dontHideSel",
        selfSplaceSel: "dontHideSel",
        amountSel: "dontHideSel",
        sizeSel: "dontHideSel",
        attackSel: "dontHideSel",
        arrowSel:"dontHideSel",
        weaponSel:"dontHideSel"
      }
      switch (this.state.spellType) {
        case 1: //Blast
          shouldShow.selfSplaceSel = "hideSel"
          shouldShow.amountSel = "dontHideSel" //dummy class, don't give it css
          shouldShow.sizeSel = "dontHideSel"
          shouldShow.attackSel = "hideSel"
          shouldShow.magicSel = "dontHideSel"
          shouldShow.arrowSel = "hideSel"
          shouldShow.weaponSel = "hideSel"
        break;
        case 2: //Explosion
          shouldShow.selfSplaceSel = "dontHideSel"
          shouldShow.amountSel = "dontHideSel"
          shouldShow.sizeSel = "dontHideSel"
          shouldShow.attackSel = "hideSel"
          shouldShow.magicSel = "dontHideSel"
          shouldShow.arrowSel = "hideSel"
          shouldShow.weaponSel = "hideSel"
        break;
        case 3: //Beam
          shouldShow.selfSplaceSel = "hideSel"
          shouldShow.amountSel = "hideSel"
          shouldShow.sizeSel = "dontHideSel"
          shouldShow.attackSel = "hideSel"
          shouldShow.magicSel = "dontHideSel"
          shouldShow.arrowSel = "hideSel"
          shouldShow.weaponSel = "hideSel"
        break;
        case 4: //melee
          shouldShow.selfSplaceSel = "hideSel"
          shouldShow.amountSel = "hideSel"
          shouldShow.sizeSel = "hideSel"
          shouldShow.attackSel = "dontHideSel"
          shouldShow.magicSel = "hideSel"
          shouldShow.arrowSel = "hideSel"
          shouldShow.weaponSel = "dontHideSel"
        break;
        case 5: //bows
          shouldShow.selfSplaceSel = "hideSel"
          shouldShow.amountSel = "hideSel"
          shouldShow.sizeSel = "hideSel"
          shouldShow.attackSel = "hideSel"
          shouldShow.magicSel = "hideSel"
          shouldShow.arrowSel = "dontHideSel"
          shouldShow.weaponSel = "dontHideSel"
        break;
        default: //None
          shouldShow.selfSplaceSel = "hideSel"
          shouldShow.amountSel = "hideSel"
          shouldShow.sizeSel = "hideSel"
          shouldShow.attackSel = "hideSel"
          shouldShow.magicSel = "dontHideSel"
          shouldShow.arrowSel = "hideSel"
          shouldShow.weaponSel = "hideSel"
      }

      let sizeOptionTags = []
      for (let i=100; i >= 20;i-=10) {
        sizeOptionTags.push(<option key = {`size${i}`} value={i}>{i}%</option>)
      }

      let AmountOptionTags = []
      for (let i=1; i <= blastAmount; i++) {
        AmountOptionTags.push(<option key = {`amount${i}`} value={i}>{i}x</option>)
      }

      let statusOptionTags = []
      for (let i=0; i < STATUS.length; i++) {
        statusOptionTags.push(<option key = {`status${i}`} value={STATUS[i]}>{STATUS[i]}</option>)
      }
      
      if (this.props.damageCalMode) {
        return(
          <div id="leftDiv" className="mainDiv">
            <div className='leftDamageContainer'>

             <div className='selectContainer'>
                <div>Select Spell Type</div>
                <select id = 'selectSpell' onChange={()=>this.handleSpellSel()}>
                  <option value = {'None'}>Select Spell type</option>
                  <option value = {'Blast'}>Blast</option>
                  <option value = {'Explosion'}>Explosion</option>
                  <option value = {'Beam'}>Beam</option>
                  <option value = {'Melee Weapon'}>Melee Weapon</option>
                  <option value = {'Ranged Weapon'}>Ranged Weapon</option>
                </select>
              </div>

              <div className={'selectContainer ' + shouldShow.magicSel}>
                <div>Select Magic</div>
                  <select id = 'selectMagic' onChange={()=>this.handleMagicSel()}>
                    <option value = 'None'>Select Magic</option>
                    {MAGIC.map(m => <option key = {m} value = {m}>{m}</option>)}
                  </select>
              </div>

                <div className= {'selectContainer ' + shouldShow.selfSplaceSel}>
                  <div>Select Self/Place</div>
                  <select>
                    <option>Self</option>
                    <option>Placed</option>
                  </select>
                </div>

                <div className={'selectContainer '+ shouldShow.amountSel}>
                  <div>Select Amount</div>
                  <select>
                    {AmountOptionTags}
                  </select>
                </div>

                <div className={'selectContainer '+ shouldShow.sizeSel}>
                  <div>Select Size</div>
                  <select>
                    {sizeOptionTags}
                  </select>
                </div>

                <div className={'selectContainer ' + shouldShow.weaponSel}>
                  <div>Select Weapon</div>
                  <select>
                    {sizeOptionTags}
                  </select>
                  <div>Is Strong?<input type="checkbox"/></div>
                </div>

                <div className={'selectContainer ' + shouldShow.attackSel}>
                  <div>Select Attack</div>
                  <select>
                    <option>1</option>
                    <option>2</option>
                  </select>
                </div>

                <div className={'selectContainer ' + shouldShow.arrowSel}>
                  <div>Select Arrow Type</div>
                  <select>
                    <option>Arrow</option>
                    <option>Smoke Arrow</option>
                  </select>
                </div>
                
                <div className='selectContainer'>
                  <div>Select Status</div>
                  <select>
                    {statusOptionTags}
                  </select>
                  <button>add status</button>
                </div>

                <br></br>

                <div className='selectContainer'>
                  <div>The Following Status Are Selected:</div>
                <div className='statusContainer'>

                  </div>
                </div>

              </div>
            </div>
          )
        } else {
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
}
 
export default LeftSide;