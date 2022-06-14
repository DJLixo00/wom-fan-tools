import React, { Component } from 'react';

import iconPow from "../images/others/iconPow.png";
import iconStr from "../images/others/iconStr.png";

class damageBox extends Component {
  state = {  } 

  listCommaString (arr) {
    let result = ""
    arr.forEach(v => {
      result += v + ", "
    });
    result = result.slice(0,result.length - 2)
    return result
  }

  render() { 
    let damage = this.props.damageSummary

    return (
    <div className="damageBox">
      <div className='dbName'>
        <div>{damage.spellName}</div>
        <button onClick={()=>this.props.delHandler(this.props.dbId)}>Delete</button>
      </div>
      <div className="dbPowStrRow">
        <div className='statPowP'><img src={iconPow}/>Power: {damage.power}</div>
        <div className='statStrP'><img src={iconStr}/>Strength: {damage.strength}</div>
      </div>
      <div className='dbStatus'> 
        Target is: {this.listCommaString(damage.statusList)}
      </div>
      <br></br>
      <div className='dbSummary'>
        <div>Total Impact Damage: <span>{damage.impact}</span></div>
        <div>Total Damage Over Time: 
          <span>{damage.dotSum}</span>
          {" "}
          <span>({damage.dotStatus})</span>
        </div>
        <div>DoT Per Tick: <span>{damage.dotTick}</span></div>
        <div>Total Damage: {damage.impact + damage.dotSum}</div>
      </div>

    </div>);
  }
}

export default damageBox;
  