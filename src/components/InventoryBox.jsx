import React, { Component } from 'react';

class InventoryBox extends Component {
  state = {  
    item: "empty",
  } 

  constructor(prop){
    super(prop);
    this.handleEquip = this.handleEquip.bind(this)
    
  }

  extractItem(id, type) {
    // Takes the item's data from JSON
  }

  handleEquip() {
    console.log(
      `equip box ${this.props.boxId} 
      contains ${this.state.item}
      selected ${this.props.boxSelected}`
    )

  }

  render() { 

    let invBoxColor = this.props.boxSelected == this.props.boxId ? 'inventoryBoxClicked' : 'inventoryBox';

    return (
      <div className={invBoxColor} onClick={()=>this.props.clicked(this.props.boxId)}>
        {"InventoryBox"}
      </div>
    );
  }

}

export default InventoryBox;
