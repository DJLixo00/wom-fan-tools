import React, { Component } from 'react';

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
    this.handleLeftCalClick = this.handleLeftCalClick.bind(this)
    this.calculateDamage = this.calculateDamage.bind(this)
    this.calculateGearStats = this.calculateGearStats.bind(this)
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
     * returns 
     * {
     * 
     * 
     * }
     */

    //get the newest the gear stats
    let gearStats = this.calculateGearStats()

    let perImp = 0
    let totImp = 0
    let perDot = 0
    let totDot = 0
    let dotType = "N/A"
    
    let spellType = obj["spellType"]

    let strength = gearStats[3]
    let power = gearStats[0]
    
    if (spellType === 4) {
      this.calMeleeDmg()
    } else if (spellType === 5) {
      this.calBowDmg()
    } else {
      this.calMagicDmg()
    }

  }

  calMagicDmg(obj, power) {
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
    let sizeMod = 1.3 - 0.3 * (size)
    let amountMod = 1
    let expPlacedMod = 1
    let expShapeMod = 1
    let impactPer = 0

    if (spellType === 1) { 
      //blast
      amountMod = 10 / (amount + 9)
      spellName += ` ${amount}x ${size}%`
    } else if (spellType === 2) { 
      //explosion
      
      if (selfPlaced === "Placed") {expPlacedMod = 0.6}
      if (explosionType === "Pillar") {expShapeMod = 1.2}

      amountMod = 2 / (amount + 1)
      sizeMod = 1.4 - 0.4 * (size)
      spellName += ` ${amount}x ${selfPlaced} ${size}% ${explosionType}`
    } else { 
      //beam
      baseDamage = 0.5 * (MAGIC_NUM + LV) + 0.7 * power
      spellName += ` ${size}%`
    }

    impactPer = baseDamage * damageMod * amountMod * expPlacedMod * expShapeMod
    spellName += ` ${spellTypeName}`

    return spellName + "\n" + impactPer + "\n" + baseDamage + "\n" + damageMod
  }

  calMeleeDmg() {

  }

  calBowDmg() {

  }

  handleLeftCalClick(obj) {
    console.log(obj)
    console.log(this.calMagicDmg(obj, 0))
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
