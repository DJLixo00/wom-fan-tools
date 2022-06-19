import React, { Component } from 'react';

import LeftSide from './LeftSide';
import RightSide from './RightSide';

class MainBox extends Component {
  state = {  
    selectionMode:false,
    damageCalMode:true,
    leftBoxId:0,
    rightItemType:undefined,
    leftSideItems:[{},{},{},{},{},{}],
    rightSideDamageArr: []
  } 

  constructor(){
    super();
    this.handleLeftIBClick = this.handleLeftIBClick.bind(this)
    this.handleRightIBClick = this.handleRightIBClick.bind(this)
    this.handleLeftCalClick = this.handleLeftCalClick.bind(this)
    this.calculateDamage = this.calculateDamage.bind(this)
    this.calculateGearStats = this.calculateGearStats.bind(this)
    this.handleRightModeClick = this.handleRightModeClick.bind(this)
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
     * returns array of the stats of the item equipped.
     * loop starts at 1 because 0 means not in selection Mode
     */

    let result = [0,0,0,0,0,0,0,0]
    for (let i = 1; i < this.state.leftSideItems.length; i++) {
      let slot = this.state.leftSideItems[i]["stats"]
      if (typeof slot === 'undefined') {
        continue;
      } 
      let arr1 = this.state.leftSideItems[i]["stats"]
      let arr2 = result
      result = this.addArrayHelper(arr1,arr2)
    }
    return result  
  }

  calculateDamage(obj){
    /**
     * Takes in the obj from headleLeftCalClick to calcualte damage.
      [spellName, impactPer, totalImpact, dotTick, totalImpact, power, strenght, dotType]
      returns nothing
     */

    //get the newest the gear stats
    let gearStats = this.calculateGearStats()

    let dotType = "N/A"
    let spellType = obj["spellType"]
    let strength = gearStats[3]
    let power = gearStats[0]
    let resultArr = ["",0,0,0,0]

    if (spellType === 4) {
      return this.calMeleeDmg()
    } else if (spellType === 5) {
      return this.calBowDmg()
    } else {
      resultArr = this.calMagicDmg(obj, power)
      // return this.calMagicDmg(obj, power) this.state.rightSideDamageArr.splice(0, 0, entry)
    }
    resultArr.push(power)
    resultArr.push(strength)
    resultArr.push(dotType)
    this.state.rightSideDamageArr.splice(0, 0, resultArr)
    this.setState({
      rightSideDamageArr: this.state.rightSideDamageArr
    })

  }

  calMagicDmg(obj, power) {
    /**
     * calculate magic impact and dot, 
     * returns [spellName, impactPer, totalImpact, dotTick, totalImpact]
     */
    const MAGIC_NUM = 19
    const LV = 90

    let wepMagObj = obj["wepMagObj"]

    let magic = wepMagObj["damage"]
    let chargePercent = parseInt(obj["charge"])
    let size = obj["size"]
    let interactions = 1
    let amount = parseInt(obj["amount"])

    let spellType = obj["spellType"]
    let spellTypeName = ["","Blast","Explosion","Beam"][obj["spellType"]]
    
    let chargeName = ''
    let selfPlaced = obj["selfPlaced"]
    let explosionType = obj["expType"]
 
    let chargeMod = 1
    if (chargePercent === 0) {
      chargeName = ''
    } else if (chargePercent === 100) {
      chargeName = 'Fully Charged '
      chargeMod = 4/3
    } else {
      chargeName = `${chargePercent}% Charged `
    }
    let spellName = `${chargeName}${wepMagObj["name"]}`
    let baseDamage = MAGIC_NUM + LV + power 
    let damageMod = magic * chargeMod * interactions
    let sizeMod = 1.3 - 0.3 * (size/100)
    let amountMod = 1
    let expPlacedMod = 1
    let expShapeMod = 1

    let impactPer = 0
    let totalImpact = 0

    let dotPercent = wepMagObj["percentDot"]
    let dotDuration = wepMagObj["dotTicks"]
    let dotTick = 0
    let totalDot = 0

    if (spellType === 1) { 
      //blast
      amountMod = 10 / (amount + 9)
      spellName += ` ${amount}x ${size}%`
    } else if (spellType === 2) { 
      //explosion
      
      if (selfPlaced === "Placed") {expPlacedMod = 0.6}
      if (explosionType === "Pillar") {expShapeMod = 1.2}

      amountMod = 2 / (amount + 1)
      sizeMod = 1.4 - 0.4 * (size/100)
      spellName += ` ${amount}x ${selfPlaced} ${size}% ${explosionType}`
    } else { 
      //beam
      baseDamage = 0.5 * (MAGIC_NUM + LV) + 0.7 * power
      spellName += ` ${size}%`
    }

    impactPer = Math.round(baseDamage * damageMod * amountMod * expPlacedMod * expShapeMod * sizeMod)
    totalImpact = impactPer * amount
    dotTick = Math.floor(totalImpact * dotPercent)
    totalDot = dotTick * dotDuration

    spellName += ` ${spellTypeName}`

    return [spellName, impactPer, totalImpact, dotTick, totalDot]
  }

  calMeleeDmg() {
    return ["spellName", 0, 0, 0, 0]
  }

  calBowDmg() {
    return ["spellName", 0, 0, 0, 0]
  }

  handleLeftCalClick(obj) {
    // console.log(obj)
    this.calculateDamage(obj)
    console.log(this.state.rightSideDamageArr)
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

  handleRightModeClick() {
    this.setState({
      damageCalMode:!this.state.damageCalMode
    })
  }

  render() {
    let gearStats = this.calculateGearStats()
    return(
      <div className="mainBox">
        <div id="topDiv" className="mainDiv">
          top
        </div>

        <LeftSide 
          mainHandler = {this.handleLeftIBClick} 
          mainCalHandler = {this.handleLeftCalClick}
          equipped = {this.state.leftSideItems}
          stats = {gearStats}
          damageCalMode = {this.state.damageCalMode}
          magicData = {this.props.magicData}
        />

        <div id="rightDiv" className="mainDiv">
          <RightSide 
            mainHandler = {this.handleRightIBClick} 
            mainSwitchHandler = {this.handleRightModeClick}
            selectionMode={this.state.selectionMode} 
            data = {this.props.data} 
            itemType = {this.state.rightItemType}
            dmgArr = {this.state.rightSideDamageArr}
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
