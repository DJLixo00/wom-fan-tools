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

  statusBonusHelper(statusBonusList,afflictedList){
  //apply highest status bonus, apply 50% of the remaining bonus
    let statusMul = []
    afflictedList.forEach(v => {
      statusMul.push(statusBonusList[v])
    });
    statusMul = statusMul.map(v => v/100 + 1)
    let maxMul = Math.max(...statusMul)
    statusMul.splice(this.includesWithIndex(statusMul,maxMul),1)
    statusMul = statusMul.map(v => (v-1)/2 + 1) //50% after the highest? Including the debuffs?
    statusMul.push(maxMul)
    // console.log(statusMul)

    let result = 1
    statusMul.forEach(v => {
      result *= v
    })

    return result
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
      [spellName, impactPer, totalImpact, dotTick, totalImpact, dotType, power, strenght, statusStr]
      returns nothing
     */

    //get the newest the gear stats
    let gearStats = this.calculateGearStats()

    let spellType = obj["spellType"]
    let strength = gearStats[3]
    let power = gearStats[0]
    let resultArr = ["",0,0,0,0]
    let statusStr = obj['status']//this.arrayToStringHelper(obj['status'])

    if (spellType === 4) {
      resultArr = this.calMeleeDmg(obj, strength)
    } else if (spellType === 5) {
      resultArr = this.calBowDmg(obj, strength)
    } else {
      resultArr = this.calMagicDmg(obj, power)
      // return this.calMagicDmg(obj, power) this.state.rightSideDamageArr.splice(0, 0, entry)
    }
    resultArr.push(power)
    resultArr.push(strength)
    resultArr.push(statusStr)
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
    let amount = parseInt(obj["amount"])

    let interactions = 1

    let bonusIndices = obj["statusIndice"]
    if (bonusIndices.length > 0) {
      let bonusList = wepMagObj["interactions"]["statusBonus"]
      interactions = this.statusBonusHelper(bonusList, bonusIndices)
    }

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

    let dotType = wepMagObj["dotName"]
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
    dotTick = Math.floor(impactPer * dotPercent)
    totalDot = dotTick * dotDuration

    spellName += ` ${spellTypeName}`

    return [spellName, impactPer, totalImpact, dotTick, totalDot, dotType]
  }

  calMeleeDmg(obj, strength) {
    let wepMagObj = obj["wepMagObj"]
    let strongBonus = obj["isStrong"] ? 1.2 : 1
    let attackObj = wepMagObj["attacks"][obj["attack"]]
    let amount = attackObj["amount"]
    let baseDamage = attackObj["damage"]
    let slope = attackObj["strMul"]
    //damage
    let impact = Math.round((slope * strength) + (baseDamage * strongBonus))
    let totalImpact = impact * amount
    let bleedTick = Math.floor(impact * 0.05)
    let totalBleed = bleedTick * 5 //bleed last for 5 ticks
    let dotType = "Bleed"
    //name
    let weaponName = (obj["isStrong"] ? "Strong " : "") + wepMagObj["name"] + " "
    let skillName = attackObj["name"]
    let attackName = weaponName + skillName

    return [attackName, impact, totalImpact, bleedTick, totalBleed, dotType]
  }

  calBowDmg(obj, strength) {
    let wepMagObj = obj["wepMagObj"]
    let strongBonus = obj["isStrong"] ? 1.2 : 1
    let arrow = obj["arrow"]
    let attackObj = wepMagObj["attacks"][arrow]
    let amount = attackObj["amount"]
    let baseDamage = attackObj["damage"]
    let slope = attackObj["strMul"]
    //damage
    let impact = Math.floor((slope * strength) + (baseDamage * strongBonus))
    // let rawIKmpact = (slope * strength) + (baseDamage * strongBonus)
    // let impact = (obj["isStrong"] ? Math.floor(rawIKmpact) : Math.floor(rawIKmpact))
    let totalImpact = impact * amount
    let bleedTick = Math.floor(impact * 0.05)
    let totalBleed = bleedTick * 5 //bleed last for 5 ticks
    let dotType = "Bleed"
    //name
    let arrowName = obj["arrow"] === "smoke" ? "Smoke Arrow" : "Arrow"
    let weaponName = (obj["isStrong"] ? "Strong " : "") + wepMagObj["name"]
    let attackName = arrowName + " Fired From " + weaponName

    return [attackName, impact, totalImpact, bleedTick, totalBleed,dotType]
  }

  handleLeftCalClick(obj) {
    // console.log(obj)
    this.calculateDamage(obj)
    // console.log(this.state.rightSideDamageArr)
    //console.log(obj)
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
          WoM Damage Calculator*
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
          <div className='botttomTopDiv'>
            {/* <a href='https://github.com/DJLixo00/wom-fan-tools'>About</a>
            <a>* Limitations</a>
            <a>References/acknowledgement</a>
            <a>Contact Me</a> */}
            <a href='https://github.com/DJLixo00/wom-fan-tools/blob/main/README.md' target="_blank">
              Please see README for references/acknowledgment, contact information, and limations of this tool.
            </a>
          </div>
          <div className='botttomBotDiv'></div>
        </div>
      </div>
    )
  }
}

export default MainBox;
