import React, { Component } from 'react';
import InventoryBox from './InventoryBox';

class RightSide extends Component {
    state = {   } 

    constructor(){
        super();
    }
    
    render() { 
        let boxArr = []
        for (let i = 0; i < 5; i++) {
            boxArr.push(
                <div className='rightInvRow' key={"righbox"+i}>
                    <InventoryBox type = "inventory"/>
                    <InventoryBox type = "inventory"/>
                </div>
            )
        }

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
                    <div className='rightRow'>here's a row</div>
                </div>
            )
        }
    }
}
 
export default RightSide;