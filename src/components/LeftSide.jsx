import React, { Component } from 'react';
import InventoryBox from './InventoryBox';
import StatusBox from './StatusBox';
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
        spellType:0,
        weapon:"branchBow",
        statusList:[],
    } 

    constructor(){
        super();
        this.assignClicked = this.assignClicked.bind(this)
        this.handleStatusSel = this.handleStatusSel.bind(this)
        this.handleWeaponSel = this.handleWeaponSel.bind(this)
        this.weaponOptionTags = this.weaponOptionTags.bind(this)
        this.attacksOptionTags = this.attacksOptionTags.bind(this)
        this.handleCalculate = this.handleCalculate.bind(this)
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
      /**
       * helper function for extracting value from <option>
       * returns [selectedValue, indexOfSelectedValue].
       * be sure there is at least 1 option tag or else it will throw error.
       */
      let selOptions = document.getElementById(id).options
      let selIndex = selOptions.selectedIndex
      return [selOptions[selIndex].value, selIndex] 
    }

    handleSpellSel() {
      let valIndex = this.selectHelper("selectSpell")
      this.setState({spellType:valIndex[1]},
        //so when you select weapons types, 
        //it automatically updates to the first in the weapon list
        //draw back: will call setState twice and thus render like 2 or 4 times
        ()=>{if (this.state.spellType > 3) {this.handleWeaponSel()}}
      )
    }

    handleWeaponSel() {
      let valIndex = this.selectHelper("selectWeapon")
      this.setState({weapon:valIndex[0]})
    }

    handleStatusSel(status) {
      /*
       * Checks this.state.statusList for the status,
       * If not found add status to the list
       * If found splice status out of hte list 
      */
      let index = this.includesWithIndex(this.state.statusList, status)
      let copiedList = []
      this.state.statusList.forEach((function(v){
        copiedList.push(v)
      }))

      if (index === -1) {
        copiedList.push(status)
      } else {
          copiedList.splice(index,1)
      }

      this.setState({statusList: copiedList},)
    }

    handleCalculate() {
      if (this.state.spellType === 0) {return}
      
      let magic = this.selectHelper("selectMagic")[0]
      let selfPlaced = this.selectHelper("selectPlaced")[0]
      let amount = this.selectHelper("selectAmount")[0]
      let size = this.selectHelper("selectSize")[0]
      let charge = this.selectHelper("selectCharge")[0]
      
      let weapon = this.state.weapon
      let attack = this.selectHelper("selectAttack")[0]
      let arrow = this.selectHelper("selectArrow")[0]
      let isStrong = document.getElementById("cbIsStrong").checked

      let info = {
        "status":this.state.statusList,
        "spellType": this.state.spellType,
        "selfPlaced":selfPlaced,
        "magic":magic,
        "amount":amount,
        "size":size,
        "charge":charge,
        "weapon": weapon,
        "attack":attack,
        "arrow":arrow,
        "isStrong":isStrong,
      }
      console.log(info)
    }

    includesWithIndex(array, elm) {
      /*
      * returns the index where the first elm is found in array
      * returns -1 otherwise
      */

      for (let i = 0; i < array.length; i++) {
        if (elm === array[i]) {
          return i
        }
      }
      return -1
    }

    weaponOptionTags() {
      /**
       * returns either jsx for meleeArr or rangeArr depending on 
       * if the user chose melee or range
       * 
       * note: "range" and "melee" are hard coded, so if the .js does not
       * have those properties, it will break
       */
      let wepType = "ranged"
      if (this.state.spellType === 4 ) { wepType = "melee"}
      let objArr = this.extractObjProp(wepType)
      let names = objArr.map(v => v.name)
      let idArr = Object.keys(this.props.magicData.OBJ[wepType])

      let tags = []
      
      for (let i = 0; i < names.length; i++) {
        tags.push(<option key = {names[i]} value = {idArr[i]}>{names[i]}</option>)
      }
      return tags
    }

    attacksOptionTags(wepId) {
      /**
       * gets the abilities of a weapon and put them in tags
       * "range" "attacks" "melee" hard coded
       */
      let wepType = "ranged"
      if (this.state.spellType === 4 ) { wepType = "melee"}
      let weapon = this.props.magicData.OBJ[wepType][wepId]
      if (typeof weapon === 'undefined') { return <option value={undefined}>error</option>}
      let weaponSkills = this.props.magicData.OBJ[wepType][wepId]["attacks"]

      let tags = []
      for (let skill in weaponSkills) {
        let tagText = weaponSkills[skill]['name']
        let tagKey = wepId + tagText
        // console.log(tagValue)
        tags.push(<option key = {tagKey} value = {skill}>{tagText}</option>)
      }
      return tags
    }

    extractObjProp(type) {
      /**
       * gets the name property from magicData.js
       */
      const magics = this.props.magicData.OBJ[type]
      let result = []
      for (let m in magics) {
        result.push(magics[m])
      }
      return result
    }

    render() { 
      const STATUS = this.props.magicData.OBJ.status
      const MAGIC = this.extractObjProp("magics").map(v => v["name"])
      // const MELEE = MELEE_ID.map(v => v["name"])
      // const RANGED = RANGED_ID.map(v => v["name"])
      
      let equipped = this.props.equipped

      let blastAmount = [1,20,5,1,1,1][this.state.spellType]
      let shouldShow = {
        magicSel: "dontHideSel",
        selfSplaceSel: "dontHideSel",
        amountSel: "dontHideSel",
        sizeSel: "dontHideSel",
        attackSel: "dontHideSel",
        arrowSel:"dontHideSel",
        weaponSel:"dontHideSel",
        ChargeSel:"dontHideSel"
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
          shouldShow.ChargeSel = "dontHideSel"
        break;
        case 2: //Explosion
          shouldShow.selfSplaceSel = "dontHideSel"
          shouldShow.amountSel = "dontHideSel"
          shouldShow.sizeSel = "dontHideSel"
          shouldShow.attackSel = "hideSel"
          shouldShow.magicSel = "dontHideSel"
          shouldShow.arrowSel = "hideSel"
          shouldShow.weaponSel = "hideSel"
          shouldShow.ChargeSel = "dontHideSel"
        break;
        case 3: //Beam
          shouldShow.selfSplaceSel = "hideSel"
          shouldShow.amountSel = "hideSel"
          shouldShow.sizeSel = "dontHideSel"
          shouldShow.attackSel = "hideSel"
          shouldShow.magicSel = "dontHideSel"
          shouldShow.arrowSel = "hideSel"
          shouldShow.weaponSel = "hideSel"
          shouldShow.ChargeSel = "dontHideSel"
        break;
        case 4: //melee
          shouldShow.selfSplaceSel = "hideSel"
          shouldShow.amountSel = "hideSel"
          shouldShow.sizeSel = "hideSel"
          shouldShow.attackSel = "dontHideSel"
          shouldShow.magicSel = "hideSel"
          shouldShow.arrowSel = "hideSel"
          shouldShow.weaponSel = "dontHideSel"
          shouldShow.ChargeSel = "hideSel"
        break;
        case 5: //bows
          shouldShow.selfSplaceSel = "hideSel"
          shouldShow.amountSel = "hideSel"
          shouldShow.sizeSel = "hideSel"
          shouldShow.attackSel = "hideSel"
          shouldShow.magicSel = "hideSel"
          shouldShow.arrowSel = "dontHideSel"
          shouldShow.weaponSel = "dontHideSel"
          shouldShow.ChargeSel = "hideSel"
        break;
        default: //None
          shouldShow.selfSplaceSel = "hideSel"
          shouldShow.amountSel = "hideSel"
          shouldShow.sizeSel = "hideSel"
          shouldShow.attackSel = "hideSel"
          shouldShow.magicSel = "hideSel"
          shouldShow.arrowSel = "hideSel"
          shouldShow.weaponSel = "hideSel"
          shouldShow.ChargeSel = "hideSel"
      }

      let sizeOptionTags = []
      for (let i=100; i >= 20;i-=10) {
        sizeOptionTags.push(<option key = {`size${i}`} value={i}>{i}%</option>)
      }

      let AmountOptionTags = []
      for (let i=1; i <= blastAmount; i++) {
        AmountOptionTags.push(<option key = {`amount${i}`} value={i}>{i}x</option>)
      }

      let statusBoxTags = []
      for (let i=0; i < STATUS.length; i++) {
        statusBoxTags.push(<StatusBox 
          key = {`status${i}`} 
          status = {STATUS[i]}
          text={STATUS[i]}
          clicked = {this.handleStatusSel}
          selected = {this.state.statusList.includes(STATUS[i])}
          />)
      }

      if (this.props.damageCalMode) {
        return(
          <div id="leftDiv" className="mainDiv">
            <div className='leftDamageContainer'>

              <div className='leftRow'>
                {this.calculateGearStats()}
              </div>

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
                  <select id = 'selectMagic'>
                    {/* <option value = 'None'>Select Magic</option> */}
                    {MAGIC.map(m => <option key = {m} value = {m}>{m}</option>)}
                  </select>
              </div>

              <div className= {'selectContainer ' + shouldShow.selfSplaceSel}>
                  <div>Select Self/Place</div>
                  <select id = 'selectPlaced'>
                    <option>Self</option>
                    <option>Placed</option>
                  </select>
              </div>

              <div className={'selectContainer '+ shouldShow.amountSel}>
                  <div>Select Amount</div>
                  <select id = 'selectAmount'>
                    {AmountOptionTags}
                  </select>
              </div>

              <div className={'selectContainer '+ shouldShow.sizeSel}>
                  <div>Select Size</div>
                  <select id = 'selectSize'>
                    {sizeOptionTags}
                  </select>
              </div>

              <div className={'selectContainer ' + shouldShow.weaponSel}>
                  <div>Select Weapon</div>
                  <select id = 'selectWeapon' onChange={()=>this.handleWeaponSel()}>
                    {this.weaponOptionTags()}
                  </select>
                  <div>Is Strong?<input type="checkbox" id="cbIsStrong"/></div>
              </div>

              <div className={'selectContainer ' + shouldShow.attackSel}>
                  <div>Select Attack</div>
                  <select id = 'selectAttack'>
                    {this.attacksOptionTags(this.state.weapon)}
                  </select>
              </div>

              <div className={'selectContainer ' + shouldShow.arrowSel}>
                  <div>Select Arrow Type</div>
                  <select id = 'selectArrow'>
                    <option value="arrow">Arrow</option>
                    <option value="smoke">Smoke Arrow</option>
                  </select>
              </div>

              <div className={'selectContainer ' + shouldShow.ChargeSel}>
                  <div>Select Charge</div>
                  <select id = 'selectCharge'>
                    <option value={0}>No Charge</option>
                    <option value={100}>Full Charge</option>
                  </select>
              </div>
                
              <div className='selectContainer'>
                <div>Select Status</div>
                <div className='statusContainer'>
                  {statusBoxTags}
                </div>
              </div>

              <div className='selectContainer'>
                <div>Note: </div>
                <div>The damage over time from the status are not counted towards the total damage.</div>
              </div>

              <br></br>

              <div className='selectContainer'>
                <button 
                  onClick={()=>this.handleCalculate()} 
                  disabled={this.state.spellType === 0}>
                  Calculate
                </button>
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