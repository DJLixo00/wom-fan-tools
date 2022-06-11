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
    
    switch (this.props.type) {
      case "equip":
        let invBoxColor = this.props.boxSelected == this.props.boxId ? 'inventoryBoxClicked' : 'inventoryBox';

        return (
          <div className={invBoxColor} onClick={()=>this.props.clicked(this.props.boxId)}>
            {"InventoryBox"}
          </div>
        );

      case "invisible":
        return (
          <div className="fakeInvBox">
            {this.props.text == null ? "":this.props.text}
          </div>
        );
      
      case "removeButton":
        return (
          <div className="inventoryBoxClicked">
            Write the code for removing stuff here! Also change the CSS
          </div>
        )

      default:
        return (
          <div className="inventoryBox" onClick={()=>console.log("aa")}>
            {this.props.text == null ? "InventoryBox":this.props.text}
          </div>
        );
    }

  }

}

export default InventoryBox;
