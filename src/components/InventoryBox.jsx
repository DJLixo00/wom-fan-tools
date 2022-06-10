import React, { Component } from 'react';

class InventoryBox extends Component {
  state = {  
    item: "empty",
  } 

  constructor(prop){
    super(prop);
    // this.handleEquip = this.handleEquip.bind(this)
    
  }

  extractItem(id, type) {
    // Takes the item's data from JSON
  }

  render() { 
    if (this.props.type == "equip") {
      let invBoxColor = this.props.boxSelected == this.props.boxId ? 'inventoryBoxClicked' : 'inventoryBox';

      return (
        <div className={invBoxColor} onClick={()=>this.props.clicked(this.props.boxId)}>
          {"InventoryBox"}
        </div>
      );

    } else {
      return (
        <div className="inventoryBox" onClick={()=>console.log("aa")}>
          {"InventoryBox"}
        </div>
      );
    }
  }

}

export default InventoryBox;
