import React, { Component } from 'react';
import InventoryBox from './InventoryBox';

class RightSide extends Component {
    state = {   } 

    constructor(){
        super();
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
            let smallArr = [<InventoryBox type = "removeButton" key="removeButton"/>]
            let rowCounter = 0
            for (let item in equipments) {
                let itemName = equipments[item]["name"]

                smallArr.push(
                    <InventoryBox type = "inventory" text = {itemName} key = {itemName}/>
                )

                if (smallArr.length == 2) {
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
            if (smallArr.length == 1) {
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
        let boxArr = this.unpackData()

        if (this.props.selectionMode) {
            return (
                <div className='rightRowContiner selectionContiner'>
                    {
                     boxArr   
                    }
                </div>
            );
        } else {
            return(
                <div className='rightRowContiner damageBoxContiner'>
                    {/* will insert DamageBox here */}
                    {/* <DamageBox/> */}
                    <div className='rightRow'>{"text"}</div>
                </div>
            )
        }
    }
}
 
export default RightSide;