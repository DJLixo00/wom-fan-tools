import React, { Component } from 'react';

class InventoryBox extends Component {
  state = {  
    item: "empty"
  } 

  constructor(){
    super();
    this.handleEquip = this.handleEquip.bind(this)
  }

  extractItem(id, type) {
    // Takes the item's data from JSON
  }

  handleEquip() {
    // this.setState() don't modify state directly because it won't render
    console.log("equip box clicked! This box contains "+this.state.item)
  }

  render() { 
    return (
      <div className="inventoryBox" onClick={this.handleEquip}>
        {"InventoryBox"}
      </div>
    );
  }

}

export default InventoryBox;
