import React, { Component } from 'react';

class InventoryBox extends Component {
  state = {  
    item: "empty",
  } 

  constructor(prop){
    super(prop);
    // this.handleEquip = this.handleEquip.bind(this)
    
  }

  render() {
    
    switch (this.props.type) {
      case "equip":
        let invBoxColor = this.props.boxSelected == this.props.boxId ? 'inventoryBoxClicked' : 'inventoryBox';

        return (
          <div className={invBoxColor} onClick={()=>this.props.clicked(this.props.boxId)}>
            {this.props.text == null ? "InventoryBox":this.props.text}
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
          <div className="inventoryBox" onClick={
            ()=>this.props.clicked(this.props.item, this.props.stats)
          }>
            {this.props.text == null ? "InventoryBox":this.props.text}
          </div>
        );
    }

  }

}

export default InventoryBox;
