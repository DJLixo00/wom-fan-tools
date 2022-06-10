import InventoryBox from './InventoryBox';
import DamageBox from './DamageBox';

function MainBox() {
  return (
    <div className="mainBox">
      <div id="topDiv" className="mainDiv">
        top
      </div>

      <div id="leftDiv" className="mainDiv">
        <div className='leftRowContiner'>
          <div className='leftRow'>
            <InventoryBox/>
            <InventoryBox/>
          </div>

          <div className='leftRow'>
            <InventoryBox/>
            <InventoryBox/>
          </div>

          <div className='leftRow'>
            <InventoryBox/>
            <InventoryBox/>
          </div>

          <div className='leftRow'>
            <div className='statDisplay'>
              statDisplay
            </div>
          </div>

        </div>
      </div>

      <div id="rightDiv" className="mainDiv">
        <div className='rightRowContiner'>
          {/* will insert DamageBox here */}
          {/* <DamageBox/> */}
          <div className='rightRow'></div>
  
        </div>
      </div>

      <div id="bottomDiv" className="mainDiv">
        bottom
      </div>
    </div>
  );
}

export default MainBox;
