import './App.css';
import MainBox from './components/MainBox';
import EQUIP_DATA from "./equipment.js";
import Magic_DATA from "./magics.js";


function App() {

  const EQUIP_OBJ = EQUIP_DATA

  return (
    <div className="App">
      <MainBox data = {EQUIP_OBJ} magicData = {Magic_DATA}/>
    </div>
  );
}

export default App;
