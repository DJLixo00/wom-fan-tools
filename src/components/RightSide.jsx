import React, { Component } from 'react';
import InventoryBox from './InventoryBox';
import DamageBox from './DamageBox';

class RightSide extends Component {
    state = {   
        enchantmentSelected:8,
    } 

    constructor(){
        super();
        this.handleInvSelect = this.handleInvSelect.bind(this)
    }

    enchantAdj = ["Powerful","Hard","Nimble","Strong","Keen","Swift","Brusting","Forceful",""]
    enchantBonus = {
        //last index indicates clean
        90:[7, 54, 9, 7, 9, 9, 9, 9, 0],
        80:[7, 48, 8, 7, 8, 8, 8, 8, 0],
        50:[4, 30, 5, 3, 5, 5, 5, 5, 0],
        40:[3, 24, 4, 3, 4, 4, 4, 4, 0]
    }

    handleInvSelect(boxName, boxStats) {
        /**
         * takes the prop item and stats from a invBox on the right side and 
         * puts it in an obj.
         * The obj is then pass back to main
         */

        let itemSelected = {
            "name":boxName,
            "stats":boxStats
        } 
        this.props.mainHandler(itemSelected)
    }

    inventory = "empty"
    handleEnchantSelect(enchantId) {
        this.setState({
            enchantmentSelected: this.state.enchantmentSelected !== enchantId? enchantId : 8
        })
    }

    encBonusHandler(stats, level) {
    /**
     * Returns stats with enchanted bonus added, `level` MUST be a key in enchantBonus.
     */
        if (this.state.enchantmentSelected === 8) {
            // is clean (not enchanted)
            return stats
        }
        let bonus = this.enchantBonus[level][this.state.enchantmentSelected]
        let encStats = []
        for (let i = 0; i < stats.length; i++) {
            encStats.push(stats[i])
        }
        encStats[this.state.enchantmentSelected] += bonus
        return encStats
    }

    unpackData() {
        /*
        * This function takes the data and loads the invBoxs on the right side depending
        * on the slot you click on the left.
        * 
        * for example, if you clicked the 'chestpiece' slot it will load the chestpiece 
        * part of the data.
        */
        if (typeof this.props.itemType == "string") {
            let equipments = this.props.data.OBJ.equipment[this.props.itemType];
            let boxArr = []
            let smallArr = [<InventoryBox type = "removeButton" key="removeButton" clicked = {this.handleInvSelect}/>]
            let rowCounter = 0
            for (let item in equipments) {
                let itemName = equipments[item]["name"]
                let itemStats = equipments[item]["stats"]
                let itemMaxLv = equipments[item]["level"][1]
                let encStats = this.encBonusHandler(itemStats, itemMaxLv)
                smallArr.push(
                    <InventoryBox 
                    key = {itemName}
                    type = "inventory" 
                    text = {this.enchantAdj[this.state.enchantmentSelected] + " " + itemName + 
                            " [" + encStats + "]"} 
                    item = {this.enchantAdj[this.state.enchantmentSelected] + " " + itemName}
                    stats = {encStats}
                    clicked = {this.handleInvSelect}
                    />
                )

                if (smallArr.length === 2) {
                    boxArr.push(
                        <div className='rightInvRow' key={"righbox"+rowCounter}>
                            {smallArr}
                        </div>
                    )
                    rowCounter += 1;
                    smallArr = []
                }
            }

            // if smallArr isn't empty we have 1 more row to append
            // don't have to reset smallArr because we're at the end
            if (smallArr.length === 1) {
                boxArr.push(
                    <div className='rightInvRow' key={"righbox"+rowCounter}>
                        {smallArr}
                        <InventoryBox type = "invisible"/>
                    </div>
                )
            }

            return boxArr
        }
    }

    render() {    
        let enchantButtonClassArr = [
            "encNotSelected","encNotSelected","encNotSelected","encNotSelected",
            "encNotSelected","encNotSelected","encNotSelected","encNotSelected","encNotSelected"]
        enchantButtonClassArr[this.state.enchantmentSelected] = "encSelected";
        
        let placeHolderDamageBoxOBj = {
            "power":999,
            "strength":555,
            "spellName":"place holder spell name",
            "statusList":["list place holder","status2","status3"],
            "impact":66666,
            "dotSum":999,
            "dotTick":9,
            "dotStatus":"Bleeding",
            "bleedDot":-1 //how long does bleed last?
        }

        if (this.props.selectionMode) {
            return (
                <div className='rightRowContainer selectionContainer'>
                    <div className='encButtonContainer'>
                        <div className= {'enchantmentButton encPow ' + enchantButtonClassArr[0]} onClick={()=>this.handleEnchantSelect(0)}></div>
                        <div className= {'enchantmentButton encDef ' + enchantButtonClassArr[1]} onClick={()=>this.handleEnchantSelect(1)}></div>
                        <div className= {'enchantmentButton encAgi ' + enchantButtonClassArr[2]} onClick={()=>this.handleEnchantSelect(2)}></div>
                        <div className= {'enchantmentButton encStr ' + enchantButtonClassArr[3]} onClick={()=>this.handleEnchantSelect(3)}></div>
                        <div className= {'enchantmentButton encCas ' + enchantButtonClassArr[4]} onClick={()=>this.handleEnchantSelect(4)}></div>
                        <div className= {'enchantmentButton encMsp ' + enchantButtonClassArr[5]} onClick={()=>this.handleEnchantSelect(5)}></div>
                        <div className= {'enchantmentButton encSze ' + enchantButtonClassArr[6]} onClick={()=>this.handleEnchantSelect(6)}></div>
                        <div className= {'enchantmentButton encKnb ' + enchantButtonClassArr[7]} onClick={()=>this.handleEnchantSelect(7)}></div>
                    </div>
                    <div className='selectionRowContainer'>{this.unpackData()}</div>
                </div>
            );
        } else {
            return(
                <div className='rightRowContainer damageBoxContainer'>
                    {/* will insert DamageBox here */}
                    <DamageBox 
                        damageSummary = {placeHolderDamageBoxOBj}
                        dbId = "db1"
                        delHandler = {(id)=>console.log(id)}
                    />
                    {/* this should be a button to add DamageBox */}
                    <div className='rightRow'>{"text"}</div>
                </div>
            )
        }
    }
}
 
export default RightSide;